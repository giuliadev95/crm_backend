/* Configuration of the server */

import { Request, Response} from 'express';

// Constants app, port, connection string
const express = require('express')
const app = express();
const port = 5000;


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

