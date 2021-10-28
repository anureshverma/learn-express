import {
  savePersonService,
  updatePersonService,
  getPersonService,
  getAllPersonService,
  deletePersonService,
} from "./person.service.js";

export const savePerson = async (req, res) => {
  console.log(`hgagghfg`);
  let data = req.body;
  const result = await savePersonService(data);
  res.status(201).send(result);
};

export const updatePerson = async (req, res) => {
  const uuid = req.params.uuid;
  let data = req.body;
  const result = await updatePersonService(uuid, data);
  res.status(201).send(result);
};

export const getPerson = async (req, res) => {
  const uuid = req.params.uuid;
  const result = await getPersonService(uuid);
  res.status(201).send(result);
};

export const getAllPerson = async (req, res) => {
  const result = await getAllPersonService();
  res.status(201).send(result);
};

export const deletePerson = async (req, res) => {
  const uuid = req.params.uuid;
  const result = await deletePersonService(uuid);
  res.status(201).send(result);
};
