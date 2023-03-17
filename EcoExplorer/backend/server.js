import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

//import routes
import usersRoutes from "./routes/users.routes.js";
import questionAnswersRoutes from "./routes/questionAnswers.routes.js";
import marksRoutes from "./routes/marks.routes.js";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/rest-api/v1/", (req, res) => {
    res.json({ message: "Welcome to Eco Explorer Backend" });
});

// routes
app.use("/rest-api/v1/users", usersRoutes);
app.use("/rest-api/v1/marks", marksRoutes);
app.use("/rest-api/v1/question-answers", questionAnswersRoutes);


const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.b6wbfao.mongodb.net/?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () =>
            console.log(`Server Running on port :http://localhost:${PORT}`)
        );
    })
    .catch((error) => {
        console.log(error.message);
    });