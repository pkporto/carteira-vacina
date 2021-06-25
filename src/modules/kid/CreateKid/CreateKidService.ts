import * as kidsRepository from '../domain/repositories/CreateKidRepository';
import { KidDTO } from "../CreateKid/models/CreateKidModel";
export class CreateKidService {
 static async execute(data: KidDTO) {
      kidsRepository.createKid(data, (err, result) => {
          if (err) throw err;

          console.log(result);
    });
  }
}