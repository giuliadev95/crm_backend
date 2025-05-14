/* starts the server */
import express, { Request, Response} from 'express';

const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req: Request, res: Response)=> {
    res.send(`Server listening on http://localhost:${port}`);
});

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
});
