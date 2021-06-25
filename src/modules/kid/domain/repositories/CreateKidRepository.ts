import { connect } from "../../../../shared/db/db";
import { KidDTO } from '../../CreateKid/models/CreateKidModel';
export const createKid = async (kid: KidDTO, callback: Function) => {
    const conn = await connect();

    conn.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query('INSERT INTO crianca(nome, cpf) VALUES( ?, ?)',
            [kid.name, kid.cpf],
            (err, result) => {
            connection.release();
            connection.end();
            connection.destroy();
            if (err) throw err;
            return callback(null, result);
        })
    });
}