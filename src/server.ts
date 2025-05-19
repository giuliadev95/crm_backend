/* Configuration of the server */
import { Request, Response} from 'express';
import contactsRouter from "./routes/contacts";
import cors from 'cors';

// Require express
const express = require('express')
// Initialize variable 'app' that uses express
const app = express();
// PORT
const port = 5000;
// Middleware that parses data into json
app.use(express.json());
app.use(cors());

app.listen(port, ()=>{
        console.log(`Server running on http://localhost:${port}`)
 });
        
// .catch(error => console.error(`Error connectiong to the database: ${error}`))

// Get method on localhost homepage
app.get('/', (req: Request, res: Response)=> {
    res.send(`Server listening on http://localhost:${port}`);
});
app.use('/contatti',contactsRouter)


