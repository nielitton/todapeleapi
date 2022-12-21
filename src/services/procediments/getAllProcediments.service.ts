import { prisma } from "../../prisma/client";

export class getAllProcedimentsService {
    async execute() {
        const procediments = await prisma.procediment.findMany({
            select: {
                id: true,
                name: true,
                price: true,
            }
        })

        

        return procediments
    }
}