import { Procediment } from "@prisma/client";
import { IProcedimentCreate } from "../../interfaces/procediments";
import { prisma } from "../../prisma/client";

export class CreateProcedimentService {
    async execute({name, price}: IProcedimentCreate): Promise<Procediment> {
        const newProcediment = await prisma.procediment.create({
            data: {
                name,
                price
            }
        })
        return newProcediment
    }

}