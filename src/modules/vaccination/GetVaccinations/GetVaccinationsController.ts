import { Request, Response } from 'express';
import { GetVaccinationsService } from './GetVaccinationsService';


export class GetVaccinationsController {

    public async handle(req: Request, res: Response): Promise<Response>{
      const { id } = req.params;
        try {
          console.log(id);
            const getVaccinationsService = new GetVaccinationsService();
                getVaccinationsService.execute(id, (err, result) => {
                  console.log(result);
                  return res.status(200).json({
                    data: result,
                  });
                });

           
        } catch {
            
        }
    }
}