const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const reqResInspector = require("express-req-res-inspector");

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(express.json({limit: "100mb"}))
app.use(cookieParser());
app.use(cors());
app.use(reqResInspector())

app.get("/test", (req, res)=> {
    console.log("Testing request!");
    return res.json({statusCode: 200, message: "Request Working fine"});
})

app.listen(3000, () => {
    console.log("Server is listening!...");
})