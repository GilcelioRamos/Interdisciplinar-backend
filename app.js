const express = require ( 'express' );
const bodyParser = require ( 'body-parser' ); 
const sequelize = require ( './src/config/database' ); 
const usuarioController = require ('./src/controllers/usuarioController');
const app = express (); 

app.use(bodyParser.urlencoded({ extended:false }));

app.post('/login', usuarioController.login);

sequelize.sync().then(() => {
    app.listen(3333, () => {
    console.log('Server is running on port 3333');
    });
});