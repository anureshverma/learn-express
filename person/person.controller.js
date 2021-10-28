import { savePersonService } from "./person.service.js";

export const savePerson = async (req, res) => {
  console.log(`hgagghfg`);
  let data = req.body;
  const result = await savePersonService(data);
  res.status(201).send(result);
};

export const updatePerson = (req, res) => {};

export const getPerson = (req, res) => {};

export const getAllPerson = (req, res) => {};

export const deletePerson = (req, res) => {};
