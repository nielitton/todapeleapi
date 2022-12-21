import { Router } from "express";
import { ClientController } from "../controller/client.controller";
import { ClientProcedimentController } from "../controller/clientProcediment.controller";

const clientController      = new ClientController
const clientProcediment     = new ClientProcedimentController()

const clientsRoutes = Router() 

clientsRoutes.post("/", clientController.createHandle)
clientsRoutes.get("/", clientController.listAllClients)
clientsRoutes.get("/:id", clientController.listOne)
clientsRoutes.delete("/:id", clientController.clientDelete)
clientsRoutes.patch("/:id", clientController.clientUpdate)
clientsRoutes.post("/procedimentClient", clientProcediment.handle)

export default clientsRoutes

