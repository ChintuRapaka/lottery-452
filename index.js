require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const getAddr = require('./deploy');
const { abi } = require('./compile');

app.use(cors());
app.use(bodyParser.json());


// app.get('/', (req, res) => {
//     res.redirect('/getContract');
// })
app.get('/getContract', async (req, res) => {
    const address = await getAddr();
    return res.json({"address": address})
})

app.get('/getAbi', (req, res) => {
    return res.json({"abi": abi});
})

app.listen(process.env.port || 5000, () => {
    console.log('Backend is up and running @http://localhost:5000');
})