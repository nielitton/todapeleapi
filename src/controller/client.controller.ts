import { Request, Response } from "express";
import { CreateClientService } from "../services/clients/createClient.service";
import { GetClientsService } from "../services/clients/getClients.service";
import { getOneClientService } from "../services/clients/getOneClient.service";

export class ClientController {
    async createHandle(req: Request, res: Response) {
        const {client_name, client_number, observations, next_procediment_date} = req.body

        const newClient = new CreateClientService()

        const result = await newClient.excecute({client_name,client_number,next_procediment_date,observations})

        res.status(201).json(result)
    }
    async listAllClients(req: Request, res: Response) {
        const clients = new GetClientsService()

        const result = await clients.execute()
        
        res.status(200).json(result)
    }
    async listOne(req: Request, res: Response) {
        const {id} = req.params

        const client = new getOneClientService()

        const returnClient = client.execute(id)

        res.status(200).json(returnClient)
    }
}