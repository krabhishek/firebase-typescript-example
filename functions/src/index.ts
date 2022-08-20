import * as functions from "firebase-functions";
import * as express from "express";

const app = express();

// middleware

app.use(express.json());

//example of path

app.get("/hello", (req, res) => {
  res.status(200).json({
    message: "Hello, World",
  });
});

app.post("/hello", (req, res) => {
  const name = req.body["name"] ?? "John Doe";
  res.status(200).json({
    message: `Hello, ${name}!!`,
  });
});

app.get("/echo", (req, res) => {
  res.status(200);
  res.send("echo");
});

exports.api = functions.https.onRequest(app);
