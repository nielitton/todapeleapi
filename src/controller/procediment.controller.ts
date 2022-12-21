import { Request, Response } from "express";
import { CreateProcedimentService } from "../services/procediments/createProcediment.service";
import { deleteProcedimentService } from "../services/procediments/deleteProcedimnt.service";
import { getAllProcedimentsService } from "../services/procediments/getAllProcediments.service";
import { getOneProcedimentService } from "../services/procediments/getOneProcediment.service";
import { updateProcedimentService } from "../services/procediments/updateProcediment.service";

export class ProcedimentController {
    async createProcediment(req: Request, res: Response) {
        const {name, price} = req.body

        const newProcediment = new CreateProcedimentService()
    
        const resultProcediment = await newProcediment.execute({name, price})

        res.status(201).json({"Message": "Created Procediment", "Procediment": resultProcediment})
    } 
    async getAllProcediments(req: Request, res: Response) {
        const allProcediments = new getAllProcedimentsService()

        const resultProcediment = await allProcediments.execute()

        res.status(200).json(resultProcediment)
    }
    async getOneProcediment(req: Request, res: Response) {
        const { id } = req.params

        const procediment = new getOneProcedimentService()
    
        const resultProcediment = await procediment.execute({id})

        res.status(200).json({"Message": "this is the procediment", "Procediment": resultProcediment})
    
    }
    async deleteOneProcediment(req: Request, res: Response) {
        const {id} = req.params

        const procediment = new deleteProcedimentService()

        const resultDeleted = await procediment.execute({id})

        res.status(200).json({"Message": "Procediment deleted", "Procediment": resultDeleted})
    }
    async updateProcediment(req: Request, res: Response) {
        const { id } = req.params
        const { price } = req.body

        const procediment = new updateProcedimentService()

        const result = await procediment.execute({id, price})
    
        res.status(200).json({"message": "Procediment updated", "procediment": result})
    }
}