import { Request, Response } from "express";
import { CreateClientService } from "../services/clients/createClient.service";
import { deleteClientService } from "../services/clients/deleteClient.service";
import { GetClientsService } from "../services/clients/getClients.service";
import { getOneClientService } from "../services/clients/getOneClient.service";
import { ClientUpdateService } from "../services/clients/updateClient.service";

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

        const returnClient = await client.execute({id})

        res.status(200).json(returnClient)
    }
    async clientDelete(req: Request, res: Response) {
        const { id } = req.params

        const deletedClient = new deleteClientService()

        const deleted = await deletedClient.execute({id})

        res.status(200).json({"Message": "User deleted", "User": deleted})
    }
    async clientUpdate(req: Request, res: Response) {
        const { id } = req.params
        const { client_number, next_procediment_date, observations } = req.body

        const updatedClient = new ClientUpdateService()

        const updated = await updatedClient.execute({id,client_number, next_procediment_date, observations})

        res.status(200).json({"Message": "Client updated", "Client_updated": updated})
    }
}