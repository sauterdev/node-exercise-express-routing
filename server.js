import express from "express";
import config from "./config";
// TODO: import router from routes/
import router from "./routes/index.js";

const app = express();

//Middleware

app.use(express.json());
app.use("/api", router)

// TODO: use the imported router to handle all requests




//error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
