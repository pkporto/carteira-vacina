import { KidDTO } from '../CreateKid/models/CreateKidModel';
import * as kidsRepository from '../repositories/KidRepository';
// import {KidRepository} from "../repositories/KidRepository";
export class GetKidsService {
   async execute(callback: Function){
    // let kidsRepository = new KidRepository();
  //  const result = await kidsRepository.getKids();
  //   console.log(result);
  //   return result;
    const result = kidsRepository.getKids((err, result) => {
      return callback(null, result);
    })
  //  return result;
  }
}