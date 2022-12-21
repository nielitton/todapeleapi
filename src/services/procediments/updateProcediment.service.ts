import { Procediment } from "@prisma/client";
import { AppError } from "../../errors/AppError";
import { IProcedimentUpdate } from "../../interfaces/procediments";
import { prisma } from "../../prisma/client";

export class updateProcedimentService {
    async execute({id, name, price}: IProcedimentUpdate): Promise<Procediment> {
        const procedimentUpdated = await prisma.procediment.update({
            where: {
                id
            }, data: {
                name,
                price
            }
        })

        if(!procedimentUpdated) {
            throw new AppError("Procediment does not exists")
        }

        return procedimentUpdated
    }
}