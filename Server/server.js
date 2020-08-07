const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


const port = process.env.PORT || 8000;



const app = express();

//UseFindAndModify: false, this is not supported anymore, update to useUnifiedTopology
mongoose
	.connect(process.env.DEV_DB, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
	.then(()=> console.log('DB Connected'))
	.catch(err=>{
		console.log(err);
	})



app.use(morgan('dev'));
app.use(bodyParser.json({limit: '200mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));

app.use(cors({ origin: "*"}));

app.post("/save-products", function(req,res){
	console.log("req.body in save-products route:", req.body);
	res.send("All good in the hood.");
});

app.listen(port, ()=>{
	console.log(`Server is running on port ${port}`)
})
