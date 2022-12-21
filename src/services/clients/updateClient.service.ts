import { AppError } from "../../errors/AppError";
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

        if(!updatedClient) {
            throw new AppError("Client does not exists")
        }
        
        return updatedClient
    }
}