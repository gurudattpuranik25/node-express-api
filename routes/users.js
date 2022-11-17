import express from "express";
import { v4 as uuidv4 } from "uuid";

// import { createUser } from "../controllers/users.js";

const router = express.Router();

let users = [];

// get users

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

// create new user

router.post("/", (req, res) => {
  const newUser = req.body;
  users.push({ ...newUser, id: uuidv4() });
  res.send(`${newUser.firstName} ${newUser.lastName} added to the database!`);
});

// get individual user

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

// delete user

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the ID ${id} deleted successfully`);
});

// update user

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  const { firstName, lastName, age } = req.body;

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User details updated for ID ${id}`);
});

export default router;
