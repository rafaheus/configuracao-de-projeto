require('dotenv').config()
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    return res.json('Api está OK!')
})

// app.listen(3000, () => {
//     console.log(process.env.GUIDO)
// })

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor em pé na porta ${port}`)
})

// app.listen(process.env.PORT, () => {
//     console.log(`Servidor em pé na porta ${process.env.PORT}`)
// })