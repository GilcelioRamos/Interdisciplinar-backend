const { Sequelize } = require('sequelize');

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize('bdinter', 'root', 'Jeni0398@', {
  host: 'localhost',  // Endereço do servidor MySQL
  dialect: 'mysql',   // Tipo do banco de dados
});

// Testando a conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados foi bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

module.exports = sequelize;

