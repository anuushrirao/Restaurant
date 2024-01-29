import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./database/db.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoutes.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

const FRONTEND_URL = "http://localhost:5173";
app.use(
  cors({
    origin: [FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

db();

app.use(errorMiddleware);

export default app;