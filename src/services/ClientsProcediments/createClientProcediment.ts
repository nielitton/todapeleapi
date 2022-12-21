import { AppError } from "../../errors/AppError";
import { ICreateProcedimentClient } from "../../interfaces/ClientProcediments/createProcediments";
import { prisma } from "../../prisma/client";

export class CreateClientProcedimentService {
    async execute({ clientId, procedimentId }: ICreateProcedimentClient): Promise<void> {

        const procedimentExist = await prisma.procediment.findUnique({
            where: {
                id: procedimentId
            }
        })

        if(!procedimentExist) {
            throw new AppError("Procediment does not exists")
        }

        await prisma.procedimentsClients.create({
            data: {
                clientId,
                procedimentId
            }
        })
    }
}