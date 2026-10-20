import express from "express";
import cors from "cors";
import { integrantes } from "./integrantes.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// GET /api/health 
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "El API está funcionando correctamente",
    timestamp: new Date().toISOString(),
  });
});

// GET /api/info
app.get("/api/info", (req, res) => {
  res.json({
    status: "ok",
    message: "El API está funcionando",
    integrantes,
  });
});

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
