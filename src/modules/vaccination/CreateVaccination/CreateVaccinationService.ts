import * as vacRepository from '../repositories/VaccinationRepository';
import { VaccinationDTO } from "../CreateVaccination/models/CreateVaccinationModel";
export class CreateVaccinationService {
 static async execute(data: VaccinationDTO):Promise<string> {
  vacRepository.createVaccination(data, (err, result) => {
          if (err) throw err;

      });
        return "Cadastro efetuado com sucesso!";
   
  }
}