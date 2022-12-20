import { Client } from "@prisma/client"
import { prisma } from "../../prisma/client";

export class getOneClientService {
    async execute({id}: {id: string}) {
        const client = await prisma.client.findUnique({
            where: {
                id
            }, select: {
                id: true,
                client_name: true,
                client_number: true,
                procediment_client: true,
                observations: true
            }
        })
        return client
    }
}