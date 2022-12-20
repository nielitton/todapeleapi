import { IClientUpdate } from "../../interfaces/client";
import { prisma } from "../../prisma/client";

export class ClientUpdateService {
    async execute({id, client_number, next_procediment_date, observations }: IClientUpdate) {
        const updatedClient = await prisma.client.update({
            where: {
                id
            },
            data: {
                client_number,
                next_procediment_date,
                observations
            }
        })
        return updatedClient
    }
}