import { Request, Response } from "express"
import { CreateClientProcedimentService } from "../services/ClientsProcediments/createClientProcediment"

export class ClientProcedimentController {
    async handle(req: Request, res: Response) {
        const {clientId, procedimentId} = req.body

        const clientProcediment = new CreateClientProcedimentService()
    
        const resultClientProcediment = await clientProcediment.execute({clientId, procedimentId})

        res.status(201).json({resultClientProcediment})
    } 
}