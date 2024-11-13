import express, {Express, Response, Request} from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { connect } from './config/database'
connect();

const app: Express = express();
const port: String = process.env.PORT;

// Set up views engine as PUG
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get("/topics", ( req: Request, res: Response ) => {
    res.render("client/pages/topics/index");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});