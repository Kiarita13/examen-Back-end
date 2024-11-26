import { Router } from "express";
import ejemplo from "./ejemplo.routes.js";
import viaje from "./viajes.routes.js";

const indexRouter = Router()

indexRouter.use('/ejemplo', ejemplo)
indexRouter.use('/viajes', viaje)

export default indexRouter