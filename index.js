const express = require('express');
const app = express()
const cors = require('cors');
const conn = require('./db/conn');

const port = process.env.PORT || 3000

const router = require('./routes/routes')

app.use(cors({crendentials: true, origin: '*'}))

app.use(router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
