import express from "express";
import tagRouter from "./controllers/tagController";

const app = express();
const port = process.env.PORT || 3000;

app.use("/", tagRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
