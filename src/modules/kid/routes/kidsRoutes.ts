import "reflect-metadata";
import { Router, Request, Response } from "express";

import { CreateKidController } from "../CreateKid/CreateKidController";

import { GetKidsController } from "../GetKids/GetKidsController";
import { container } from "tsyringe";

const kidsRoutes = Router();

const createKidController = container.resolve(CreateKidController);
const getKidsController = container.resolve(GetKidsController);
kidsRoutes.get("/", (req: Request, res: Response) => {
  return res.send("teste");
});

kidsRoutes.post("/addKid", createKidController.handle);

kidsRoutes.get("/getKids", getKidsController.handle);

export default kidsRoutes;
