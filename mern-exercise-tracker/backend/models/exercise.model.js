//Dependencias
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//"Tabela" Collection Schema
const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
}, {
    timestamps: true
});

//Criar tabela 'Exercise' conforme o schema
const Exercise = moongose.model('Exercise', exerciseSchema);

//Export
module.exports = Exercise;