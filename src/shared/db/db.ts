import mysql from 'mysql2';

export async function connect() {
    const connection = await mysql.createPool({
      host: "l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "oby1m6a6mked834c",
      password: "jq780h8gluiy9jrq",
      database: "jqxc44ack723ous6"
    });
    return connection;
}