import { AppError } from "../../errors/AppError";
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
            }
        })

        
        if(!procediment) {
            throw new AppError("Procediment does not exists", 400)
        }

        return procediment
    }
}