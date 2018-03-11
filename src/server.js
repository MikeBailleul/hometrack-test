import bodyParser from 'body-parser';
import express from 'express';
import filter from './routes/filter';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/filter', filter);

const port = process.env.PORT || 8080;
app.listen(port, console.log('Listening on port', port));
