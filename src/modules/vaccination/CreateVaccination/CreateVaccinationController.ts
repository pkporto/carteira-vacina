import { Request, Response } from 'express';
import { CreateVaccinationService } from './CreateVaccinationService';


export class CreateVaccinationController {

    public async handle(req: Request, res: Response): Promise<Response>{
        const { lote, enf, data_vac, id_vacina, id_crianca} = req.body;
        console.log(req.body);
        try {
            const result = await CreateVaccinationService.execute({ lote, enf, data_vac, id_vacina, id_crianca});

            return res.status(201).json({
                message: result
            })
        } catch {
            
        }
    }
}