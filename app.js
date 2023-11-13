const express = require("express");

const { authenticateUser } = require("./authenticateUser");
const { urlLogger } = require("./urlLogger");
const app = express();
const morgan = require("morgan");

app.get(
    "/api/cats/:id",
    (req, res, next) => {
        const { id } = req.params;

        if (id === "666") {
            //direct to the other /api/cats/:id path here
        } else next();
    },
    (req, res) => {
        res.status(200).send({ msg: "Im the first cat route" });
    }
);

app.get("/api/cats/:id", (req, res, next) => {
    res.status(200).send({ msg: "Im the demon cat" });
});

app.post("/api/login", authenticateUser, (req, res) => {
    res.status(200).send({ msg: "Here are the secrets" });
});

app.post("/api/text-endpoint", (req, res) => {
    // send back the plain text
});

app.use((err, req, res, next) => {
    if (err.status === 401) {
        res.status(401).send({ msg: "No secrets for you" });
    }
});

module.exports = app;
