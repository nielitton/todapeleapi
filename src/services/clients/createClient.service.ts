import { Client } from "@prisma/client"
import { IClientCreate } from "../../interfaces/client";
import { prisma } from "../../prisma/client";

export class CreateClientService {
    async excecute({client_name, client_number, observations, next_procediment_date}: IClientCreate): Promise<Client> {
        const newClient = await prisma.client.create({
            data: {
                client_name,
                client_number,
                observations,
                next_procediment_date,
            },
        })

        return newClient  
    }
}