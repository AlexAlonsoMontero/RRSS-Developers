const express = require('express');
const morgan = require('morgan');
const { swaggerDocs } = require('./v1/swagger')

const app = express();
const routes = require('./v1/routes/routes');

const cors = require('cors')
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

//Routes
app.use('/api/v1/', routes);

const port = process.env.WEB_PORT;
const host = process.env.WEB_HOST;

if (process.env.NODE_ENV != 'test') {

    const { dbConnection } = require('./db/config')
    dbConnection();
}
const server = app.listen(port, host, () => {
    console.log(`Server runing at http://${host}:${port} \n Enviroment: ${process.env.NODE_ENV}`);
    swaggerDocs(app, port, host);
})

module.exports = { app, server }