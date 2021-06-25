import "reflect-metadata";
import express, { NextFunction, Request, response, Response } from "express";
import cors from "cors";
import kidsRoutes from "../../../modules/kid/routes/kidsRoutes";
const app = express();

//Enable CORS
app.use(cors());
app.use(express.json());
const PORT = 6767;

app.use(kidsRoutes);
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
