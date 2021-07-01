import "reflect-metadata";
import { Router, Request, Response } from "express";

import { CreateKidController } from "../CreateKid/CreateKidController";

import { GetKidsController } from "../GetKids/GetKidsController";
import { GetKidController } from "../GetKid/GetKidController";
import { DeleteKidController } from "../DeleteKid/DeleteKidController";
import { container } from "tsyringe";

const kidsRoutes = Router();

const createKidController = container.resolve(CreateKidController);
const getKidsController = container.resolve(GetKidsController);
const getKidController = container.resolve(GetKidController);
const deleteKidController = container.resolve(DeleteKidController);

kidsRoutes.get("/", (req: Request, res: Response) => {
  return res.send("teste");
});

kidsRoutes.post("/addKid", createKidController.handle);

kidsRoutes.get("/getKids", getKidsController.handle);

kidsRoutes.get("/getKid/:id", getKidController.handle);

kidsRoutes.delete("/deleteKid/:id", deleteKidController.handle);



export default kidsRoutes;
