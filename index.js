const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
require('dotenv').config()

const { connectToMongoDb } = require("./connect");
const URL = require("./models/url");
const { checkForAuthentication, restrictTo } =require("./middleware/auth");


const urlRoutes = require("./routes/url");
const staticRouter = require("./routes/staticROuters");
const userRoute = require("./routes/user");

const mongo_url=process.env.MONGO
connectToMongoDb(mongo_url).then(() => {
  console.log("mongoDb connected...");
});


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url",restrictTo(["NORMAL","ADMIN"]), urlRoutes);
app.use("/user", userRoute);
app.use("/", staticRouter);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    },
    { new: true }
  );

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }
  res.redirect(entry.redirectURL);
});

const PORT = 8001;

app.listen(PORT, () => console.log(`Server has Started on Port : ${PORT} http://loacalhost:8001` ));
