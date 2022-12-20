import { Router } from "express";
import { ClientController } from "../controller/client.controller";

const clientController = new ClientController

const clientsRoutes = Router()

clientsRoutes.post("/", clientController.createHandle)
clientsRoutes.get("/", clientController.listAllClients)
clientsRoutes.get("/:id", clientController.listOne)
clientsRoutes.delete("/:id", clientController.clientDelete)
clientsRoutes.patch("/:id", clientController.clientUpdate)

export default clientsRoutes

