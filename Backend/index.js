const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoutes");
const orderRoute = require("./routes/orderRoutes");
const cartRoute = require("./routes/cartRoutes");
const authRoute = require("./routes/authRoutes");
const cors = require("cors");

dotenv.config();
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Db connected successful");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
