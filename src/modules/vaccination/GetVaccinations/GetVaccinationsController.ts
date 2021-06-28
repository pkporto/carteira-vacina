import { Request, Response } from 'express';
import { GetVaccinationsService } from './GetVaccinationsService';


export class GetVaccinationsController {

    public async handle(req: Request, res: Response): Promise<Response>{

        try {
            // const kidsList = await
            const getVaccinationsService = new GetVaccinationsService();
                getVaccinationsService.execute((err, result) => {
                  console.log(result);
                  return res.status(200).json({
                    data: result,
                  });
                });

           
        } catch {
            
        }
    }
}