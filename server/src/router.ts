import { Router } from "express";

import summaryRouter from "./routes/summaryRoutes";

const router = Router();

router.use("/summary", summaryRouter);

export default router;
