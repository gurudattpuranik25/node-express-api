import express from "express";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users',userRoutes);

app.get("/", (req, res) => {
  res.send("Hi there...this is a new node js project");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
