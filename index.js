import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index.js";
import dotenv from "dotenv";

const { urlencoded, json } = bodyParser;
const { config } = dotenv;

config();
const app = express();

app.use(urlencoded({"extended": false}));
app.use(json());

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if(err) {
        console.log(`Connection to server at port ${PORT} has failed.`);
    } else {
        console.log(`Connection to server at port ${PORT} is successful.`);
    }
});