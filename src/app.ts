import express, { Request, Response } from "express"
import { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import { env } from "./app/config/env";
const app:Application = express();

app.use(express.json());

app.use(cors({
    origin : [env.FRONTEND_URL , env.BETTER_AUTH_URL, "http://localhost:3000", "http://localhost:5000"],
    credentials : true,
    methods : ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders : ["Content-Type", "Authorization"]
}))

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/', async (req: Request, res: Response) => {
    res.status(201).json({
        success: true,
        message: 'API is working',
    })
});


export default app;