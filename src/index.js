const express = require("express"); // Asegúrate de que Express está instalado
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡CRM Backend en funcionamiento! 🚀");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
