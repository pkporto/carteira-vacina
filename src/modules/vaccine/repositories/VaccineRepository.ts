import { listenerCount } from "events";
import { connect } from "../../../shared/db/db";
import { VaccineDTO } from '../CreateVaccine/models/CreateVaccineModel';

export const createVaccine = async (vaccine: VaccineDTO, callback: Function) => {
    const conn = await connect();

    conn.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(`INSERT INTO vacina(nome, descricao, fabricante) VALUES( '${vaccine.nome}', '${vaccine.descricao}', '${vaccine.fabricante}')`,
            [],
            (err, result) => {
            connection.release();
            if (err) throw err;
            return callback(null, result);
        })
    });
}

export const getVaccines = async (callback: Function) =>  {
    const conn = await connect();

    conn.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query('SELECT * FROM vacina', [], (err, result) => {
            connection.release();
            if (err) throw err;
            return callback(null,result);
            
        });


    })
}







// export class KidRepository {
//   async createVaccine(vaccine: KidDTO, callback: Function) {
//     const conn = await connect();

//     conn.getConnection(function (err, connection) {
//       if (err) throw err;

//       connection.query(
//         "INSERT INTO crianca(nome, cpf) VALUES( ?, ?)",
//         [vaccine.name, vaccine.cpf],
//         (err, result) => {
//           connection.release();
//           if (err) throw err;
//           return callback(null, result);
//         }
//       );
//     });
//   }

//     async getVaccines(): Promise<KidDTO[]> {
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
