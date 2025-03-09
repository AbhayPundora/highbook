import express from "express";
import cors from "cors";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();


const app = express();

app.use(cors({origin:process.env.CLIENT_URL, credentials: true}))//for alow our frontend to access our api access // localhost:5173 witch is the react frontend witch we are giving permission to access our api
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts",postRoute);
app.use("/api/auth",authRoute);
app.use("/api/test",testRoute);
app.use("/api/users",userRoute);


app.listen(8000, ()=>{
    console.log("server is running");
})