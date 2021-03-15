const express = require("express"); // import the express js

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

// Import the Controllers End Points

const PublishRoute = require("./routes/publishRoute");

const SubscribeRoute = require("./routes/subscribeRoute");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


app.use(express.static("public"));

app.use(cors());

// Handle Cors Policy here -- Start

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader("Access-Control-Allow-Credentials", "true");

    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");

    res.setHeader("Access-Control-Allow-Headers", "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    next();
});

// Handle Cors Policy here -- End

app.use("/subscribe/", SubscribeRoute);

app.use("/publish/", PublishRoute);

// app.use("*", (req, res) => {
//     res.status(404).send({
       
// });

const server = app.listen(8000, () => {
    host = server.address().address;

    port = server.address.port;

    console.log("Server running at " + process.env.PORT);
});
