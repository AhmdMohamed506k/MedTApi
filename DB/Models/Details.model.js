import mongoose, { model, Schema } from "mongoose";

const TermDetailsSchema = new Schema({
   TermId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Term",
    required: true,
    unique: true,
  },
  EnglishDefinition: {
    type: String,
    required: true,
  },
  ArabicDefinition: {
    type: String,
    required: true,
  },
  AI_Explanation: {
    type: String,
  },
  Examples: [{
    ExampleSentence: String,
  },
 ],
  Definition3dImageUrl: {
    type: String,
    default: "",
  },
});

const TermDetailsModel = model("TermDetails", TermDetailsSchema);
export default TermDetailsModel;
