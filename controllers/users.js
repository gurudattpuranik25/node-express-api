import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = () => (req, res) => {
  console.log(users);
  res.send(users);
};

export const createUser = (req, res) => {
  const newUser = req.body;
  users.push({ ...newUser, id: uuidv4() });
  res.send(`${newUser.firstName} ${newUser.lastName} added to the database!`);
};

export const getIndividualUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the ID ${id} deleted successfully`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  const { firstName, lastName, age } = req.body;

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User details updated for ID ${id}`);
};
