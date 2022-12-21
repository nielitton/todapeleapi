import { AppError } from "../../errors/AppError";
import { prisma } from "../../prisma/client";

export class deleteProcedimentService {
    async execute({id}: {id: string}) {
        const deletedProcediment = await prisma.procediment.delete({
            where: {
                id
            }
        })

        if(!deletedProcediment) {
            throw new AppError("Procediment does not exists")
        }

        return deletedProcediment
    }
}