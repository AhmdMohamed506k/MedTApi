import { Router } from "express";
import * as Tr from "./Term.controller.js";

const TermRouter = Router();


TermRouter.post("/MedTApi/api/v1/addTerm", Tr.addMedicalTerm);

TermRouter.get("/MedTApi/api/v1/search/:searchQuery", Tr.getTermBySearch);

TermRouter.get("/MedTApi/api/v1/all",Tr.getAllTerms);

TermRouter.get('/MedTApi/api/v1/categories', Tr.getAllCategories);

TermRouter.get("/MedTApi/api/v1/GetTerm/:_id",Tr.getSpecificTerm);

TermRouter.put("/MedTApi/api/v1/updateTerm/:id",Tr.updateMedicalTerm);

TermRouter.delete("/MedTApi/api/v1/DeleteTerm",Tr.DeleteSpecificTerm);

TermRouter.delete('/MedTApi/api/v1/DeleteTermsByCategoryName/:categoryName', Tr.DeleteTermsByCategory);


export default TermRouter;