import express, {Express, Response, Request} from 'express';
import dotenv from 'dotenv';
dotenv.config();

//* Database
import { connect } from './config/database'
connect();

import { Topic } from './models/topic.model';

const app: Express = express();
const port: String = process.env.PORT;

// Set up views engine as PUG
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get("/topics", async ( req: Request, res: Response ) => {
    const topics = await Topic.find({
        deleted: false
    });

    console.log(topics)

    res.render("client/pages/topics/index");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

