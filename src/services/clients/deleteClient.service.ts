import { AppError } from "../../errors/AppError";
import { prisma } from "../../prisma/client";


export class deleteClientService {
    async execute({id}: {id: string}) {
        const clientDeleted = prisma.client.delete({
            where: {
                id,
            }
        })

        if(!clientDeleted) {
            throw new AppError("Client does not exists")
        }
        
        return clientDeleted
    }
}