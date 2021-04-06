/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;
const filePath = __dirname + "/user.json";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// API calls
app.post("/api/subscribe", function (req, res) {
  fs.readFile(
    filePath,
    { flag: "a+", encoding: "utf-8" },
    function (err, data) {
      if (err) throw err;

      let arrayOfObjects = { users: [] };

      if (data) {
        arrayOfObjects = JSON.parse(data);
      }

      arrayOfObjects.users.push({ email: req.body.email });
      fs.writeFile(filePath, JSON.stringify(arrayOfObjects), function (err) {
        if (err) {
          throw err;
        }

        res.status(200).json({
          message: "Email is registered.",
        });
      });
    }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
