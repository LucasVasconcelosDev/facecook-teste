// Importação do Mongoose para manipular o MongoDB
const mongoose = require("mongoose");

// Função assíncrona para estabelecer a conexão com o banco de dados
async function conexao() {
    try {
        // Tentativa de conexão com o banco de dados MongoDB utilizando o método connect do Mongoose
        await mongoose.connect("mongodb+srv://Lukinhas:T4tPVypzvjhmeOmf@cluster0.sg7umpq.mongodb.net/");
    } catch (error) {
        // Se ocorrer um erro durante a conexão, será capturado aqui e exibido no console
        console.log("Erro de conexão com o banco de dados:", error);
    }
}

// Exportação da função para que ela possa ser utilizada em outros módulos
module.exports = conexao;
