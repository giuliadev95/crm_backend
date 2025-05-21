import 'dotenv/config';

const sql = require('mssql/msnodesqlv8');


// Interface for config options Object
interface Options {
   trustedConnection: boolean
}

// Interface for config Object
interface DbConfig {
    server : any,
    database: any 
    driver: any,
    options: Options
}

// config Object
const config : DbConfig = {
    server : "(LocalDb)\\MSSQLLocalDB",
    database : "playground",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }   
}

sql.connect(config, function(error: any) {
    if(error){
        console.log(error)
    } else { 
    console.log('Connected.');
   }
})