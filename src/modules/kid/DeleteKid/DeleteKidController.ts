import { Request, Response } from 'express';
import kidsRoutes from '../routes/kidsRoutes';
import { DeleteKidService } from './DeleteKidService';


export class DeleteKidController {
 

  public async handle(req: Request, res: Response): Promise<Response> {
    const deleteKidService = new DeleteKidService();
    const { id } = req.params;
    try {
      // const kidsList = await
     deleteKidService.execute(id, (err, result) => {
        if (err) throw err;
        console.log(result);
        return res.status(200).json({
          data: 'Deletado com sucesso!',
        });
      });
    } catch {}
  }
}