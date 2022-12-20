import { Router } from "express";
import clientsRoutes from "./client.routes";
import { procedimentsRouter } from "./procediments.routes";

const routes = Router()

routes.use("/clients", clientsRoutes)
routes.use("/procediments", procedimentsRouter)

export { routes }