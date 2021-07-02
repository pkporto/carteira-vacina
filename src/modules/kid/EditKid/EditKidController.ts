import { Request, Response } from 'express';
import { EditKidService } from './EditKidService';


export class EditKidController {

    public async handle(req: Request, res: Response): Promise<Response>{
        const { id, nome, cpf } = req.body;
        console.log(req.body);
        try {
            const result = await EditKidService.execute({ id, nome, cpf });

            return res.status(201).json({
                status: 201,
                message: result
            })
        } catch {
            
        }
    }
}