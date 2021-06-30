// import { KidDTO } from '../CreateKid/models/CreateKidModel';
import * as vaccinationRepository from '../repositories/VaccinationRepository';
// import {KidRepository} from "../repositories/KidRepository";
export class GetVaccinationsService {
   async execute(id: number, callback: Function){
    // let kidsRepository = new KidRepository();
  //  const result = await kidsRepository.getKids();
  //   console.log(result);
  //   return result;
    const result = vaccinationRepository.getVaccinations(id, (err, result) => {
      return callback(null, result);
    })
  //  return result;
  }
}