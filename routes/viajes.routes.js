import { Router } from "express";
import { deleteViaje, 
    getAllViaje, 
    getIDViaje, 
    postViaje, 
    putViaje 
} from "../controller/viajes.controller.js";

const viaje = Router()
viaje.get('/', getAllViaje)
viaje.get('/:id', getIDViaje)
viaje.post('/', postViaje)
viaje.put('/:id', putViaje)
viaje.delete('/:id', deleteViaje)

export default viaje