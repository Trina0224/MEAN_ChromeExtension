const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 8000;



const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json({limit: '200mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));

app.use(cors({ origin: "*"}));



app.listen(port, ()=>{
	console.log(`Server is running on port ${port}`)
})
