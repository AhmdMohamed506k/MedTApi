import mongoose, { model, Schema } from "mongoose";

const TermSchema = new Schema({
    EnglishTerm: { 
      type: String,
      required: true,
      index: true,
      trim: true 
    },
    ArabicTerm: { 
      type: String,
      required: true,
      index: true,
      trim: true 
    },
    EnglishSynonym: {
      type: String,
      required: true,
      trim: true,
    },
    Pronnucation: {
      type: String,
      required: true,
      trim: true,
    },
    Specialization: {
    type: String,
    required: true,
    index: true, 
    trim: true
},

   
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
},);


TermSchema.virtual("details", {
  ref: "TermDetails", 
  localField: "_id",
  foreignField: "TermId",
  justOne: true, 
});

const TermModel = model("Term", TermSchema);
export default TermModel;