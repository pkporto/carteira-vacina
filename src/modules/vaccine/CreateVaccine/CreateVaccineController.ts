import { Request, Response } from 'express';
import { CreateVaccineService } from './CreateVaccineService';


export class CreateVaccineController {

    public async handle(req: Request, res: Response): Promise<Response>{
        const { nome, fabricante, descricao } = req.body;

        try {
            const result = await CreateVaccineService.execute({ nome, fabricante, descricao });

            return res.status(201).json({
                message: result
            })
        } catch {
            
        }
    }
}