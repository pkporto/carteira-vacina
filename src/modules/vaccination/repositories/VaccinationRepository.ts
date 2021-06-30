import { listenerCount } from "events";
import { connect } from "../../../shared/db/db";
import { VaccinationDTO } from '../CreateVaccination/models/CreateVaccinationModel';

export const createVaccination = async (vaccination: VaccinationDTO, callback: Function) => {
    const conn = await connect();

    conn.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(`INSERT INTO vacinacao(lote, enf, data_vac, id_vacina, id_crianca) VALUES( '${vaccination.lote}', '${vaccination.enf}', '${vaccination.data_vac}', '${vaccination.id_vacina}', '${vaccination.id_crianca}')`,
            [],
            (err, result) => {
            connection.release();
            if (err) throw err;
            return callback(null, result);
        })
    });
}

export const getVaccinations = async (id, callback: Function) =>  {
    const conn = await connect();

    conn.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM vacinacao where id_crianca = ?", [id], (err, result) => {
          connection.release();
          if (err) throw err;
          return callback(null, result);
        });


    })
}







// export class KidRepository {
//   async createVaccination(vaccination: KidDTO, callback: Function) {
//     const conn = await connect();

//     conn.getConnection(function (err, connection) {
//       if (err) throw err;

//       connection.query(
//         "INSERT INTO crianca(nome, cpf) VALUES( ?, ?)",
//         [vaccination.name, vaccination.cpf],
//         (err, result) => {
//           connection.release();
//           if (err) throw err;
//           return callback(null, result);
//         }
//       );
//     });
//   }

//     async getVaccinations(): Promise<KidDTO[]> {
//         let list: KidDTO[] = [];
      
//     const conn = await connect();

//     conn.getConnection(function (err, connection) {
//         if (err) throw err;
//       connection.query("SELECT * FROM crianca", [], (err, result) => {
//         connection.release();
//           if (err) throw err;
//           console.log(list);
          
//           return result;
//       });
//     });
        
//   }
// }
