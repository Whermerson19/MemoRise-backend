import { Router } from "express";

import { userRouter } from "./user.routes";
import { sessionRouter } from "./session.routes";
import { listRouter } from "./list.routes";
import { cardRouter } from "./card.routes";

const appRouter = Router();

appRouter.use("/users", userRouter);
appRouter.use("/session", sessionRouter);
appRouter.use("/list", listRouter);
appRouter.use("/cards", cardRouter);

export default appRouter;
