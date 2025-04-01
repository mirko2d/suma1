const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/sumar', (req, res) => {
    const { matriz1, matriz2 } = req.body;
    const filas = matriz1.length;
    const columnas = matriz1[0].length;

    let resultado = Array(filas).fill(0).map(() => Array(columnas).fill(0));

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            resultado[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }

    res.json({ resultado });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
