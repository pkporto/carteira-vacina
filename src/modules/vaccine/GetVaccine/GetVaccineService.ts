// import { KidDTO } from '../CreateKid/models/CreateKidModel';
import * as vaccinesRepository from '../repositories/VaccineRepository';
// import {KidRepository} from "../repositories/KidRepository";
export class GetVaccineService {
   async execute(id: number, callback: Function){
    // let kidsRepository = new KidRepository();
  //  const result = await kidsRepository.getKids();
  //   console.log(result);
  //   return result;
    const result = vaccinesRepository.getVaccine(id, (err, result) => {
      return callback(null, result);
    })
  //  return result;
  }
}