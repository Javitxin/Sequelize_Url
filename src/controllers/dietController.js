const dotenv = require('dotenv');
dotenv.config();
const { Model } = require('sequelize');

// importar modelos
//const modelUsers = require('../../models').Usuarios
const Usuario = require('../../models/Usuarios.js')

// CRUD Users
const DietController ={
    
    async getUserByMail(req, res){
        const mail = 'marialopezmix@gmail.com';
        console.log('-----ESTO TRAE MAIL----' + mail)
        try {
            console.log('-----PASA---USER--')
            const user = await Usuario.findOne({ where: {Correo: mail }});
            if (user) {
                console.log('Usuario encontrado por correo', user.toJSON())
            } else {
                console.log('Usuario no encontrado');
            }
            console.log('-----ESTO TRAE USER----' +user);
           return user;
                     //res.json(JSON.stringify(user))
        } catch (error) {
            console.log('----ERROR----' +error);
            res.status(500).send({message: 'Error finding E-Mail', error});  
        }
    }
    
}
module.exports = DietController;