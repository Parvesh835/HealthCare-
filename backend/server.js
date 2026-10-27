const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors())

const dotenv = require('dotenv');
dotenv.config();

const ConnectDb = require('./config/db');
ConnectDb();

const PORT = process.env.PORT ||3000 

const authRouter = require('./routers/authrouter')

app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})