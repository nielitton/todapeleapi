import { Router } from "express";
import { ClientController } from "../controller/client.controller";

const clientController = new ClientController

const clientsRoutes = Router()

clientsRoutes.post("/", clientController.createHandle)
clientsRoutes.get("/", clientController.listAllClients)

export default clientsRoutes

