//Dependencias
const router = require('express').Router();
let User = require('../models/user.model');

//index path de users, Find User, mostra todos usuários
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Adiciona um novo usuário na database
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Export
module.exports = router;