import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import userRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";
import noteRoutes from "./routers/notes.routes";

const app: Application = express();

app.use(express.json());

app.use("/user", userRoutes);
app.use("/user/login", loginRoutes);

app.use("/note", noteRoutes);

app.use(handleErrors);
export default app;