import { Request, Response } from 'express';
import { GetVaccineService } from './GetVaccineService';


export class GetVaccineController {

    public async handle(req: Request, res: Response): Promise<Response>{
      const { id } = req.query;
        try {
          console.log(id);
            const getVaccineService = new GetVaccineService();
                getVaccineService.execute(id, (err, result) => {
                  console.log(result);
                  return res.status(200).json({
                    data: result,
                  });
                });

           
        } catch {
            
        }
    }
}