import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());    //security middleware that [rotect the app by setting diif values to headers
app.use(morgan("dev"));    //logs requests on the console

app.get("/",(req,res) => {
  res.send('Express end point');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`) ;
})