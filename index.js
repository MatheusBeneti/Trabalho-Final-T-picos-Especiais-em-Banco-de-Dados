const express = require('express');
const app = express()
const cors = require('cors');
const {connectToMongoDB} = require('./db/conn');

const port = process.env.PORT || 3000

const router = require('./routes/routes')

app.use(cors({crendentials: true, origin: '*'}))

app.use(express.json());

app.use(router)

app.listen(port, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${port}`);
});
