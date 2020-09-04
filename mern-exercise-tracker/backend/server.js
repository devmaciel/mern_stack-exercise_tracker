//Dependencies
const express = require('express');
const cors = require('cors');
const moongose = require('mongoose');

//ENV Config
require('dotenv').config();

//Express Server
const app = express();
const port = process.env.PORT || 5000;

//Middlewares 
app.use(cors());
app.use(express.json());

//Moongose Connection
const uri = process.env.ATLAS_URI;
moongose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = moongose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//Require e Use das Rotas
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//Listen Port Start Server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});