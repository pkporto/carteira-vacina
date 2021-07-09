import "reflect-metadata";
import { Router, Request, Response } from "express";

import { CreateVaccineController } from "../CreateVaccine/CreateVaccineController";

import { GetVaccinesController } from "../GetVaccines/GetVaccinesController";
import { GetVaccineController } from "../GetVaccine/GetVaccineController";
import { container } from "tsyringe";

const vaccineRoutes = Router();

const createKidController = container.resolve(CreateVaccineController);
const getKidsController = container.resolve(GetVaccinesController);
const getVaccineController = container.resolve(GetVaccineController);
vaccineRoutes.get("/", (req: Request, res: Response) => {
  return res.send("teste");
});

vaccineRoutes.post("/addVaccine", createKidController.handle);

vaccineRoutes.get("/getVaccines", getKidsController.handle);
vaccineRoutes.get("/getVaccine", getVaccineController.handle);

export default vaccineRoutes;
