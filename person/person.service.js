import Person from "./person.js";

export const savePersonService = async (data) => {
  console.log(`data`, data);
  const person = new Person({ name: "sadfd" });
  console.log(`Person`, person);
  const result = await person.save();
  console.log(`result`, result);
  return result;
};
