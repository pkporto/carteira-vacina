import "reflect-metadata";
import { Router, Request, Response } from "express";

import { CreateVaccineController } from "../CreateVaccine/CreateVaccineController";

import { GetVaccinesController } from "../GetVaccines/GetVaccinesController";
import { container } from "tsyringe";

const kidsRoutes = Router();

const createKidController = container.resolve(CreateVaccineController);
const getKidsController = container.resolve(GetVaccinesController);
kidsRoutes.get("/", (req: Request, res: Response) => {
  return res.send("teste");
});

kidsRoutes.post("/addVaccine", createKidController.handle);

kidsRoutes.get("/getVaccines", getKidsController.handle);

export default kidsRoutes;
