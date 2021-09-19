import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import router from "./routes/routes";
import AppError from "../Errors/AppError";

import createConnection from "../../database/index";

createConnection();

const app = express();

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(Number(err.statusCode)).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "Error",
      message: `internal error server ${err.message}`,
    });
  }
);

export default app;
