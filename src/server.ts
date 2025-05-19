/* Configuration of the server */

import { Request, Response} from 'express';
import { poolPromise } from './db_config/db';
// import mongoose from 'mongoose';
// simport cors from 'cors';

// Constants app, port, connection string
const express = require('express')
const app = express();
const port = 5000;
// const db_ulr = "mongodb://localhost:27017/corsomongo"; // To put in .env


// Edit this, replace mongoose with SQL Server
// Connect server to the mongoDB local database & server listens for requests on port 5000
//mongoose.connect(db_ulr)

    poolPromise
    app.listen(port, ()=>{
        console.log(`Server running on http://localhost:${port}`)
        });
    
   // .catch(error => console.error(`Error connectiong to the database: ${error}`))
    

// Middleware that parses data into json
app.use(express.json());

// Get method on localhost homepage
app.get('/', (req: Request, res: Response)=> {
    res.send(`Server listening on http://localhost:${port}`);
});


