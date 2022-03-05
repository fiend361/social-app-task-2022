import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import mongoose from 'mongoose';


import user_routes from './routes/users';
import post_routes from './routes/posts';


const app = express();

mongoose
    .connect(config.mongo.url)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/images', express.static('./images'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/users', user_routes);
app.use('/posts', post_routes);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    return res.status(404).json({
        status: 404,
        message: err.message
    });
});

app.use((req, res, next) => {
    const err = new Error('Internal Server Error');
    return res.status(500).json({
        status: 500,
        message: err.message
    });
});


const server = http.createServer(app);
server.listen(config.server.port, () => console.log('server is running'));