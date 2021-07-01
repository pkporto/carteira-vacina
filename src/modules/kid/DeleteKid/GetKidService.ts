import { KidDTO } from '../CreateKid/models/CreateKidModel';
import * as kidsRepository from '../repositories/KidRepository';
// import {KidRepository} from "../repositories/KidRepository";
export class GetKidService {
   async execute(id:number , callback: Function){
    // let kidsRepository = new KidRepository();
  //  const result = await kidsRepository.getKid();
    console.log('result');
  //   return result;
     const result = kidsRepository.getKid(id, (err, result) => {
       console.log(result);
      return callback(null, result);
    })
  //  return result;
  }
}