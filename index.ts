import express, {Express, Response, Request} from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port: String = process.env.PORT;

app.get("/topics", ( req: Request, res: Response ) => {
    res.send("Album");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});