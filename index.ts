import express, {Express, Response, Request} from 'express';
import dotenv from 'dotenv';
dotenv.config();

//* Import Database
import { connect } from './config/database'
connect();

import { Topic } from './models/topic.model';
// * End import database

//* Import Route
import { routesClient } from "./routes/index.route";
//* End import route

const app: Express = express();
const port: String = process.env.PORT;

//* Set up views engine as PUG
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.use(express.static(`${__dirname}/public`)); //Set up public which contain static file
//* End set up views

routesClient(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

