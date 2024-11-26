import mongoose from "mongoose";

const viajeSchema = new mongoose.Schema({
    destino: { type: String, required: true },     
    paisSalida: { type: String, required: true },         
    descripcion: { type: String },                  
    fechaInicio: { type: Date, required: true },    
    fechaFin: { type: Date, required: true },       
    precio: { type: Number, required: true },       
    tipo: { type: String, required: true } 
});

const viajes = mongoose.model('Viaje', viajeSchema);

export default viajes