const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const routes = require('./routes/routes');


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/est');
    console.log("Connection success");
}
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})

app.use(cors());
app.use(express.json());
app.use(routes);
