import * as kidsRepository from '../repositories/KidRepository';
import { KidDTO } from "../EditKid/models/EditKidModel";
export class EditKidService {
 static async execute(data: KidDTO):Promise<string> {
      kidsRepository.editKid(data, (err, result) => {
          if (err) return "Erro na edição!";

      });
        return "Edição efetuada com sucesso!";
   
  }
}