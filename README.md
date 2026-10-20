# Taller IV - Programación Web (Ciclo 02, 2026)

Proyecto con **Vite + React + Reactstrap** (frontend) y **Express** (API REST).

## Cómo ejecutarlo

Abre dos terminales.

**Terminal 1 - API (puerto 3001)**
```bash
cd backend
npm install
npm start
```

**Terminal 2 - Frontend (puerto 5173)**
```bash
cd frontend
npm install
npm run dev
```

Abre http://localhost:5173

## Endpoints
- `GET /api/health` -> confirma que el API funciona.
- `GET /api/info` -> integrantes, edad, carrera y materias aprobadas.

Los datos de los integrantes se editan en `backend/integrantes.js`.
