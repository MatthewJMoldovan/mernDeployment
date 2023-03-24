require('dotenv').config();

const express = require('express')
const cors = require('cors');
const { storeRouter } = require('./routes/store.routes')


const port = process.env.API_PORT;

require('./config/mongoose.config');

const app = express();





app.use(cors());

app.use(express.json());

app.use('/api/stores', storeRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));