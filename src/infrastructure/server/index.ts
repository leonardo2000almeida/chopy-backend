import cors from "cors";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import { error, log } from "console";

dotenv.config();

const app = express();
app.use(cors(), helmet(), json(), urlencoded({ extended: true }));

const { PORT } = process.env;

app.listen(PORT, () => {
  try {
    log(`Server is listening on port: ${PORT}`);
  } catch (err) {
    error(err);
  }
});
