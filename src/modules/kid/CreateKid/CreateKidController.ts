import { Request, Response } from 'express';
export class CreateKidController {
    constructor(private createKidService: CreateKidService){}

    async handle(req: Request, res: Response): Promise<Response>{
        
    }
}