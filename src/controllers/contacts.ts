import { poolPromise } from "../db_config/db";
import { Request, Response } from "express";

// GET METHOD : get() from localhost:5000/api
export const getContacts = async (req: Request, res: Response) => {
    try {
        const pool = await poolPromise as import("mssql").ConnectionPool;
        const result = await pool.request().query("SELECT * FROM Contatti");
        res.status(200).json(result.recordset); // send the data
        console.log(result.recordset);
        
    } catch (err) {
        console.error(err);
        res.status(500).send("Errore nel recupero Contatti"); 
    }  
}