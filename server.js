// Import the express module
// Importa o módulo express
const express = require('express');

// Initialize the express application
// Inicializa a aplicação express
const app = express();

// Define the port the server will run on
// Define a porta em que o servidor vai rodar
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
// Serve arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Start the server and log a message
// Inicia o servidor e exibe uma mensagem no console
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});