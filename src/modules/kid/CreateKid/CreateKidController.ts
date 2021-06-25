import { Request, Response } from 'express';
import { CreateKidService } from './CreateKidService';


export class CreateKidController {

    public async handle(req: Request, res: Response): Promise<Response>{
        const { name, cpf } = req.body;

        try {
            const result = await CreateKidService.execute({ name, cpf });

            return res.status(201).json({
                message: result
            })
        } catch {
            
        }
    }
}