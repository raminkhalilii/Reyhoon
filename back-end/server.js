import express from 'express';
import cors from 'cors';
import {connectDB} from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";

const app = express();
const port = 4000;

//middleware
app.use(cors());
app.use(express.json());

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)

app.use("/images" , express.static("uploads"));

app.get('/', (req, res) => {
    res.send('Welcome to Reyhoon');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

