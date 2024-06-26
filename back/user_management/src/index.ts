import express from "express";
import { authRouter } from "./router";
import { prismaClient } from '../prisma/client';
import { errorHandler } from "./middlewares/error-handler";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", authRouter);

app.use(errorHandler);

// async function connectToDatabase() {
//     try {
//         await prismaClient.$connect();
//         console.log('Connected to database');
//     } catch (error) {
//         console.error('Error connecting to database:', error);
//         process.exit(1);
//     }
// }

// connectToDatabase();
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
