import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import dataBaseConnection from "./config/db.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5000;


const app = express();

dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

dataBaseConnection();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
