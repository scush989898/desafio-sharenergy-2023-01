import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import clientRoutes from "./routes/client.routes";
import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());
app.use(cors());


app.use("/login", sessionRoutes);
app.use("/user", userRoutes);
app.use("/client", clientRoutes);

app.use(handleErrorMiddleware);

export default app;
