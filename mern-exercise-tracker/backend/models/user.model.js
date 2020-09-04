//Dependencias
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//"Tabela" Collection Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true
});

//Criar tabela 'User' conforme o schema
const User = mongoose.model('User', userSchema);

//Export
module.exports = User;