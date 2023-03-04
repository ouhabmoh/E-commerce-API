const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("db"))
        .catch((e) => console.log(e));


        app.get("/api/test", () => {
            console.log("test is succ")
        })

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, () =>{
    console.log("backend is running");
});