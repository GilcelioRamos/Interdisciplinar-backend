const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define o modelo (tabela)
const Usuario = sequelize.define('usuario', {
  // Defina as colunas da tabela
  id_CPF: {
    type: DataTypes.INTEGER,        
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  dt_nasc:{
    type: DataTypes.DATE,
    allowNull: false,
    unique: true, 
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {

  tableName: 'usuario', 
  timestamps: true,  
});

module.exports = Usuario;
