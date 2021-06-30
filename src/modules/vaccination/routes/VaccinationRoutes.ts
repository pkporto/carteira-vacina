import "reflect-metadata";
import { Router, Request, Response } from "express";

import { CreateVaccinationController } from "../CreateVaccination/CreateVaccinationController";

import { GetVaccinationsController } from "../GetVaccinations/GetVaccinationsController";
import { container } from "tsyringe";

const vacRoutes = Router();

const createVacController = container.resolve(CreateVaccinationController);
const getVacController = container.resolve(GetVaccinationsController);
vacRoutes.get("/", (req: Request, res: Response) => {
  return res.send("teste");
});

vacRoutes.post("/addVaccination", createVacController.handle);

vacRoutes.get("/getVaccination/:id", getVacController.handle);

export default vacRoutes;
