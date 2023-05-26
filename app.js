const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const categoryRouter = require("./routes/category.route");
// require("dotenv").config();
app.use(express.json());
app.use("/category", categoryRouter);
const start = async () => {
  try {
    app.listen(port, (req, res) => {
      console.log(`Server is listening to port ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
