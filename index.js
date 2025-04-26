const express = require('express');
const mainRouter = require('./routes/index');
const app = express();
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use('/api/v1', mainRouter);


app.listen(port, () => {
    console.log("app is listening on 3000 port");
})