




import TermModel from "../../DB/Models/MedicalTerm.model.js";
import TermDetailsModel from "../../DB/Models/Details.model.js";
import { asyncHandler } from "../Middelwars/ErrorHandler.js";
import ConnectionDB from "../../DB/ConectionDB.js";

export const addMedicalTerm = asyncHandler(async (req, res, next) => {

    const { EnglishTerm,ArabicTerm,EnglishSynonym ,Pronnucation,Specialization, EnglishDefinition ,ArabicDefinition,AI_Explanation, AI_Accuracy,ExampleSentence ,Definition3dImageUrl } = req.body;

     
     
    
    


    const newTerm = await TermModel.create({ EnglishTerm, ArabicTerm, EnglishSynonym ,Pronnucation ,Specialization});

    await TermDetailsModel.create({
        TermId: newTerm._id,
        EnglishDefinition,
        ArabicDefinition,
        AI_Accuracy,
        AI_Explanation,
        Examples: { ExampleSentence },
        Definition3dImageUrl
    });
       
        

    res.status(201).json({ success: true, message: `Term and Details added Successfully your Term Id is ${newTerm._id}`});
});

export const getTermBySearch = asyncHandler(async (req, res, next) => {
    await ConnectionDB();
    const { searchQuery } = req.params; 

  
    const searchRegex = new RegExp(searchQuery, 'i'); 

    const DefinitionData = await TermModel.find({
        $or: [
            { EnglishTerm: searchRegex }, 
            { ArabicTerm: searchRegex },
            { Specialization: searchRegex } 
        ]
    }).populate('details').limit(10); 

  
    if (!DefinitionData || DefinitionData.length === 0) {
        return res.status(404).json({ 
            success: false, 
            message: "sorry Term not found" 
        });
    }

    res.status(200).json({
        success: true,
        Count: DefinitionData.length,
        data: DefinitionData
    });
});

export const getAllTerms = asyncHandler(async (req, res, next) => {
    await ConnectionDB();
    const  AllTerms= await TermModel.find().select('EnglishTerm ArabicTerm EnglishSynonym Pronnucation Specialization').populate("details");



    res.status(200).json({
        success: true,
        count: AllTerms.length,
        data: AllTerms
    });
});

export const getSpecificTerm = asyncHandler(async (req, res, next) => {
    await ConnectionDB();
    const { _id } = req.params;

 
    const SpecificTerm = await TermModel.findById({_id}).populate('details'); 

    
    if (!SpecificTerm) {
        return res.status(404).json({
            success: false,
            message: "Sorry Medical Term Not Found"
        });
    }
   

 
     
   
    res.status(200).json({ success: true, SpecificTerm});
});

export const updateMedicalTerm = asyncHandler(async (req, res, next) => {
      await ConnectionDB();
    const { id } = req.params;
  
    const {  EnglishTerm,ArabicTerm,EnglishSynonym ,Pronnucation,Specialization, EnglishDefinition ,ArabicDefinition,AI_Explanation,AI_Accuracy,ExampleSentence ,Definition3dImageUrl  } = req.body;

    
    const UpdatedDefinition = await TermModel.findByIdAndUpdate(id, {  EnglishTerm,  ArabicTerm, EnglishSynonym, Pronnucation ,Specialization},
        { new: true, runValidators: true }
    );

    if (!UpdatedDefinition) {
        return res.status(404).json({ success: false, message: "Term Not Found" });
    }

  
   const DefinitionDetails = await TermDetailsModel.findOneAndUpdate( { TermId: id }, { 
            EnglishDefinition,
            ArabicDefinition,
            AI_Explanation,
            AI_Accuracy,
            Definition3dImageUrl,
            Examples:{
                ExampleSentence,
            }
        },
        { new: true, runValidators: true }
    );
    
   


  
    res.status(200).json({
        success: true,
        message: "Updated Successfully",
        data: UpdatedDefinition,
        DefinitionDetails
       
    });
});

export const DeleteSpecificTerm = asyncHandler(async (req, res, next) => {
    await ConnectionDB();
    const { _id } = req.body;

 
    const SpecificDefinition = await TermModel.findByIdAndDelete(_id);
    if (!SpecificDefinition) {
    return res.status(404).json({ success: false, message: "Medical Term Not Found" });
    }
    const SpecificDefinitionDetails = await TermDetailsModel.findOneAndDelete({TermId:_id}) 
   
     
    
    if (!SpecificDefinition) {
        return res.status(404).json({ success: false,  message: "Sorry Medical Term Not Found" });
    }
   

   
    res.status(200).json({ success: true, Message:"Successfully Deleted"});
});