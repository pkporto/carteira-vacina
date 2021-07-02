import { Request, Response } from 'express';
import { CreateKidService } from './CreateKidService';


export class CreateKidController {

    public async handle(req: Request, res: Response): Promise<Response>{
        const { nome, cpf } = req.body;

        try {
            const result = await CreateKidService.execute({ nome, cpf });

            return res.status(201).json({
                status: 201,
                message: result
            })
        } catch {
            
        }
    }
}