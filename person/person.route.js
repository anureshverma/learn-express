import express from "express";
import {
  getPerson,
  getAllPerson,
  savePerson,
  updatePerson,
  deletePerson,
} from "./person.controller.js";

const personRouter = express.Router();

personRouter.get("/:uuid", getPerson);
personRouter.get("/", getAllPerson);

personRouter.post("/", savePerson);

personRouter.post("/:uuid", updatePerson);

personRouter.delete("/:uuid", deletePerson);

export default personRouter;
