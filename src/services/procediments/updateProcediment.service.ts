import { Procediment } from "@prisma/client";
import { IProcedimentUpdate } from "../../interfaces/procediments";
import { prisma } from "../../prisma/client";

export class updateProcedimentService {
    async execute({id, price}: IProcedimentUpdate): Promise<Procediment> {
        const procedimentUpdated = await prisma.procediment.update({
            where: {
                id
            }, data: {
                price
            }
        })
        return procedimentUpdated
    }
}