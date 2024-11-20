const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const app = express();

const router = require("./app/routes/route");
app.use(express.json());
let port = process.env.port || 5000;
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/excelDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => console.log(`Server listening port ${port}`));
