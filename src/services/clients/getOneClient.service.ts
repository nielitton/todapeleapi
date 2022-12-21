import { Client } from "@prisma/client"
import { AppError } from "../../errors/AppError";
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
                next_procediment_date: true,
                procediment_client: {
                    select: {
                        procediment: {
                            select: {
                                name: true,
                                price: true,
                            }
                        }
                    }
                },
                observations: true
            }
        })

        if(!client) {
            throw new AppError("Client does not exist")
        }

        return client
    }
}