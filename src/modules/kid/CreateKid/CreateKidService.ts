import * as kidsRepository from '../repositories/KidRepository';
import { KidDTO } from "../CreateKid/models/CreateKidModel";
export class CreateKidService {
 static async execute(data: KidDTO):Promise<string> {
      kidsRepository.createKid(data, (err, result) => {
          if (err) throw err;

      });
        return "Cadastro efetuado com sucesso!";
   
  }
}