import { prisma } from "../../prisma/client";

export class GetClientsService {
    async execute() {
        const clients = prisma.client.findMany({
            select: {
                id: true,
                client_name: true, 
                client_number: true,
                next_procediment_date: true,
                procediment_client: {
                    select: {
                        procediment: {
                            select: {
                                name: true,
                                price: true
                            }
                        }
                    }
                },
                observations: true
            }
        })

        return clients
    }
}