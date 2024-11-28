const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define o modelo (tabela)
const User = sequelize.define('solitacoes', {
  // Defina as colunas da tabela
  id_solicitacao: {
    type: DataTypes.STRING,   
    autoIncrement: true,       
    primaryKey: true,
  },
  id_CPF:{
    type: DataTypes.STRING,
    references: {
      model: usuario,          
      key: 'id_CPF',            
    },
    onUpdate: 'CASCADE',    
    onDelete: 'CASCADE',    
  },
  id_CNPJ:{
    type: DataTypes.STRING,
    references: {
      model: instituicoes,          
      key: 'id_CNPJ',            
    },
    onUpdate: 'CASCADE',    
    onDelete: 'CASCADE',   
  },
  data_solicitacao:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  status:{
    type: DataTypes.STRING,
    allowNull: false,
  }
},{
    tableName: 'solicitacoes',
    timestamps: true,
});