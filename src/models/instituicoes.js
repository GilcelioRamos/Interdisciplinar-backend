const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define o modelo (tabela)
const User = sequelize.define('instituicoes', {
  // Defina as colunas da tabela
  id_CNPJ: {
    type: DataTypes.STRING,      
    primaryKey: true,
  },
telefone:{
    type: DataTypes.STRING,
    allowNull: false,
},
endereco: {
    type: DataTypes.STRING,
    allowNull: false,
},
numero: {
  type: DataTypes.STRING,
    allowNull: false,
}
});