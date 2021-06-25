import "reflect-metadata";
import { Router, Request, Response } from "express";

import { CreateKidController } from "../CreateKid/CreateKidController";
import { container } from "tsyringe";

const kidsRoutes = Router();

const createKidController = container.resolve(CreateKidController);
kidsRoutes.get("/", (req: Request, res: Response) => {
  return res.send("teste");
});

kidsRoutes.post("/addKid", createKidController.handle);

export default kidsRoutes;
