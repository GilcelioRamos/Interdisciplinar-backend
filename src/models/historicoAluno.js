const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define o modelo (tabela)
const User = sequelize.define('historicoAluno', {
  // Defina as colunas da tabela
  id_historico: {
    type: DataTypes.STRING,
    autoIncrement: true,      
    primaryKey: true,
  },
  id_CPF: {
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
  ano: {
    type: DataTypes.DATE,          
    primaryKey: true,
  },
  nota:{
    type: DataTypes.STRING,        
    primaryKey: true,
  },
  arquivo_pdf:{
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'historicoAluno',
  timestamps: true,
});