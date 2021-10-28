import Person from "./person.js";
import { v4 as uuidv4 } from "uuid";

export const savePersonService = async (data) => {
  console.log(`data`, data);
  const person = new Person(data);
  person.uuid = uuidv4();
  console.log(`Person`, person);
  const result = await person.save();
  console.log(`result`, result);
  return result;
};

export const getAllPersonService = async (data) => {
  const result = await Person.find({});
  console.log(`result`, result);
  return result;
};

export const updatePersonService = async (uuid, data) => {
  console.log(`data`, data);
  const result = await Person.updateOne({ uuid }, data);
  return result;
};

export const getPersonService = async (uuid) => {
  const result = await Person.findOne({ uuid });
  console.log(`result`, result);
  return result;
};

export const deletePersonService = async (uuid) => {
  const result = await Person.deleteOne({ uuid });
  console.log(`result`, result);
  return result;
};
