import 'dotenv/config';
import sql from 'mssql';

// Interface for config options Object
interface Options {
    encrypt : any,
    trustServerCertificate: boolean
}

// Interface for config Object
interface DbConfig {
    user : any,
    password : any,
    server : any,
    database: any 
    options: Options
}

// config Object
const config : DbConfig = {
    user :process.env.USER,
    password: process.env.PASSWORD,
    server : process.env.SERVER,
    database : process.env.DATABASE,
    options: {
        encrypt: process.env.DB_ENCRYPT = true,
        trustServerCertificate: true
    }   
}


// export poolPromise
export const poolPromise: Promise<void | sql.ConnectionPool> = new sql.ConnectionPool(config)
.connect()
.then(pool => {
    console.log(`Connected to Azure DB`);
    return pool;
})
.catch(error => {
    console.log(`Error connecting to Azure DB : ${error}`);
});