const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require("cors");


app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log("yes");
});

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "usersystem",
});
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.post("/create", (req, res) => {
    console.log(req.body);
    const input = JSON.stringify(req.body.value);
   db.query(
        "INSERT INTO userinfo_table (firstName) VALUES (?)",
        [input],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send("Values Inserted");
            }

        }
    );


});