import { KidDTO } from '../CreateKid/models/CreateKidModel';
import * as kidsRepository from '../repositories/KidRepository';
// import {KidRepository} from "../repositories/KidRepository";
export class DeleteKidService {
   async execute(id:number , callback: Function){
    // let kidsRepository = new KidRepository();
  //  const result = await kidsRepository.deleteKid();
    console.log('result');
  //   return result;
     const result = kidsRepository.deleteKid(id, (err) => {
       if (err) throw err;
       console.log(result);
      return callback(null);
    })
  //  return result;
  }
}