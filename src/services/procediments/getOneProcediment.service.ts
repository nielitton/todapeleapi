import { prisma } from "../../prisma/client";

export class getOneProcedimentService {
    async execute({id}: {id: string}) {
        const procediment = await prisma.procediment.findUnique({
            where: {
                id
            }, select: {
                id: true,
                name: true,
                price: true,
                procediment_client: true,
            }
        })
        return procediment
    }
}