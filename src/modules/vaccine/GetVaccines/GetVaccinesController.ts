import { Request, Response } from 'express';
import { GetVaccinesService } from './GetVaccinesService';


export class GetVaccinesController {

    public async handle(req: Request, res: Response): Promise<Response>{

        try {
            // const kidsList = await
            const getKidsService = new GetVaccinesService();
                getKidsService.execute((err, result) => {
                  console.log(result);
                  return res.status(200).json({
                    data: result,
                  });
                });

           
        } catch {
            
        }
    }
}