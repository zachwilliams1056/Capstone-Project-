const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getMichaelQuote } = require('./controller');

app.get("/api/michael", getMichaelQuote);

const { getWestsideQuote } = require('./controller');

app.get("/api/westside", getWestsideQuote);

const { getTomQuote } = require('./controller');

app.get("/api/tom", getTomQuote);

const { createWestsideQuote } = require('./controller')

app.post("/api/westside", createWestsideQuote);

const { createMichaelQuote } = require('./controller')

app.post("/api/michael", createMichaelQuote);

const { createTomQuote } = require('./controller')

app.post("/api/tom", createTomQuote);

app.listen(5000, () => console.log("Server running on 5000"));