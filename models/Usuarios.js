/*
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    
    static associate(models) {
      // define association here
      Usuarios.hasMany(models.SeguimientoCita,{foreignKey:'User_id'})
      Usuarios.hasMany(models.Plan,{foreignKey:'User_id'})
    }
  }
  Usuarios.init({
    Nombre: DataTypes.STRING,
    Apellido: DataTypes.STRING,
    Contraseña: DataTypes.STRING,
    Rol_Usuario: DataTypes.STRING,
    Correo: DataTypes.STRING,
    Fecha_Registro: DataTypes.DATE,
    User_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};
*/

const { Sequelize, DataTypes } = require('sequelize');


class Usuario extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        Nombre: {
          type: DataTypes.STRING,
          allowNull: false
        },
        Apellido:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Contraseña: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Correo: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        Rol_Usuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Fecha_Registro: {
            type: DataTypes.DATE,
            allowNull: false
        },
        User_id: {
          type: DataTypes.INTEGER
        }
        // Otros atributos del modelo...
      },
      {
        sequelize,
        modelName: 'Usuario', // Nombre del modelo
        tableName: 'usuarios' // Nombre de la tabla en la base de datos
      }
    );
  }
  static associate(models){
    this.hasMany(models.SeguimientoCita, {foreignKey: 'User_id'});
    this.hasMany(models.Plan, {foreignKey: 'User_id'});

  }
}


module.exports = Usuario;
