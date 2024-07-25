import express from "express";
import cors from "cors";
// import { corsOptions } from '~/config/cors'
require("dotenv").config();
const connection = require("~/config/database");

const apiRoutes = require("~/routes/");
const configViewEngine = require("~/config/viewEngine");
const port = process.env.PORT || 8888;

const START_SERVER = () => {
  const app = express();

  // Xử lý CORS
  app.use(cors());

  //config req.body
  app.use(express.json()); // for json
  app.use(express.urlencoded({ extended: true })); // for form data

  //config template engine
  configViewEngine(app);

  //khai báo route
  app.use("/v1/api/", apiRoutes);
  // app.use('/', getHomepage);

  app.get("/", (req, res) => {
    res.json("hello");
  })(async () => {
    try {
      //using mongoose
      await connection();

      app.listen(port, () => {
        console.log(`Backend Nodejs App listening on port ${port}`);
      });
    } catch (error) {
      console.log(">>> Error connect to DB: ", error);
    }
  })();
};

START_SERVER();
