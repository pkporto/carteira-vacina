import * as kidsRepository from '../repositories/VaccineRepository';
import { VaccineDTO } from "../CreateVaccine/models/CreateVaccineModel";
export class CreateVaccineService {
 static async execute(data: VaccineDTO):Promise<string> {
      kidsRepository.createVaccine(data, (err, result) => {
          if (err) throw err;

      });
        return "Cadastro efetuado com sucesso!";
   
  }
}