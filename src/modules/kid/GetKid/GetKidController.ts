import { Request, Response } from 'express';
import kidsRoutes from '../routes/kidsRoutes';
import { GetKidService } from './GetKidService';


export class GetKidController {
 

  public async handle(req: Request, res: Response): Promise<Response> {
    const getKidService = new GetKidService();
    const { id } = req.params;
    try {
      // const kidsList = await
     getKidService.execute(id, (err, result) => {
        if (err) throw err;
        console.log(result);
        return res.status(200).json({
          data: result,
        });
      });
    } catch {}
  }
}