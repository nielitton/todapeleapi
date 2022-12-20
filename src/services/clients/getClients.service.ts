import { prisma } from "../../prisma/client";

export class GetClientsService {
    async execute() {
        const clients = prisma.client.findMany()

        return clients
    }
}