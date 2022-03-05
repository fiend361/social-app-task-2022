import dotenv from 'dotenv';

dotenv.config();

const MONGO_USER = 'mongo';
const MONGO_PASSWORD = process.env.DB_PASS;
const MONGO_HOST = 'cluster0.gsps3.mongodb.net/blog';

const MONGO = {
    host: MONGO_HOST,
    username: MONGO_USER,
    password: MONGO_PASSWORD,
    url: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}`,
};


const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost:1337';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}

const config = {
    mongo: MONGO,
    server: SERVER
}

export default config;