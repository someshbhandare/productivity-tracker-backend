const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log("Database Connected."))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5500;
const ActivityRouter = require('./routes/activity.route');

app.use(cors());
app.use(express.json());
app.use('/api', ActivityRouter);

app.get("/", (req, res) => {
  res.send("Namaste");
});

app.listen(PORT, () => console.log("Server running on port ", PORT));
