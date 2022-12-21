import { prisma } from "../../prisma/client";

export class deleteProcedimentService {
    async execute({id}: {id: string}) {
        const deletedProcediment = await prisma.procediment.delete({
            where: {
                id
            }
        })
        return deletedProcediment
    }
}