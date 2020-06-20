const express = require("express");
const carsRouter = require("./cars/cars-router");
const welcome = require("./welcome/welcome-router")

const server = express();

const port = process.env.PORT || 5005;

server.use(express.json());

server.use("/", welcome)
server.use("/cars", carsRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

server.listen(port, () => {
  console.log(`\n== API running on port ${port} ==\n`);
});
