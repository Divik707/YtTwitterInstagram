const express = require('express');
const app = express();
const port = 3000;
const {UserRouter} = require('./Routes/user');
const { mongoose } = require('mongoose');

app.use(express.json())
app.use('/api1', UserRouter)

async function main() {
    await mongoose.connect('mongodb+srv://diviksaxenaa2610:H8r3uzhEMwVAfqqK@divik.gjpj8.mongodb.net/')
    app.listen(port, () => {
        console.log(`Serving on ${port}`)
    })
}

main()
