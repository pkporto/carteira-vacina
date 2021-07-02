import mysql from 'mysql2';

//produção
// export async function connect() {
//     const connection = await mysql.createPool({
//       host: "l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//       user: "oby1m6a6mked834c",
//       password: "jq780h8gluiy9jrq",
//       database: "jqxc44ack723ous6"
//     });
//     return connection;
// }

//dev
export async function connect() {
  const connection = await mysql.createPool({
    host: "localhost",
    user: "root",
    password: "toor",
    database: "vacinacao"
  });
  return connection;
}