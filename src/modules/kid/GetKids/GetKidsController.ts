import { Request, Response } from 'express';
import kidsRoutes from '../routes/kidsRoutes';
import { GetKidsService } from './GetKidsService';


export class GetKidsController {

    public async handle(req: Request, res: Response): Promise<Response>{

        try {
            // const kidsList = await
                GetKidsService.execute((err, result) => {
               console.log(result);
               return res.status(200).json({
                 data: result,
               }); 
           });

           
        } catch {
            
        }
    }
}