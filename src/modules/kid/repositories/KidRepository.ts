import { listenerCount } from "events";
import { connect } from "../../../shared/db/db";
import { KidDTO } from '../CreateKid/models/CreateKidModel';

export const createKid = async (kid: KidDTO, callback: Function) => {
    const conn = await connect();

    conn.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query('INSERT INTO crianca(nome, cpf) VALUES( ?, ?)',
            [kid.name, kid.cpf],
            (err, result) => {
            connection.release();
            if (err) throw err;
            return callback(null, result);
        })
    });
}

export const getKids = async (callback: Function) =>  {
    const conn = await connect();

    conn.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query('SELECT * FROM crianca', [], (err, result) => {
            connection.release();
            if (err) throw err;
            return callback(null,result);
            
        });


    })
}







// export class KidRepository {
//   async createKid(kid: KidDTO, callback: Function) {
//     const conn = await connect();

//     conn.getConnection(function (err, connection) {
//       if (err) throw err;

//       connection.query(
//         "INSERT INTO crianca(nome, cpf) VALUES( ?, ?)",
//         [kid.name, kid.cpf],
//         (err, result) => {
//           connection.release();
//           if (err) throw err;
//           return callback(null, result);
//         }
//       );
//     });
//   }

//     async getKids(): Promise<KidDTO[]> {
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
