import { prisma } from "../../prisma/client";


export class deleteClientService {
    async execute({id}: {id: string}) {
        const userDeleted = prisma.client.delete({
            where: {
                id,
            }
        })
        return userDeleted
    }
}