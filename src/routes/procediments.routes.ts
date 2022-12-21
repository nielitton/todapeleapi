import { Router } from "express";
import { ProcedimentController } from "../controller/procediment.controller";

const procedimentsRouter = Router()

const procedimentController = new ProcedimentController()


procedimentsRouter.post("/", procedimentController.createProcediment)
procedimentsRouter.get("/", procedimentController.getAllProcediments)
procedimentsRouter.get("/:id", procedimentController.getOneProcediment)
procedimentsRouter.delete("/:id", procedimentController.deleteOneProcediment)
procedimentsRouter.patch("/:id", procedimentController.updateProcediment)

export { procedimentsRouter }