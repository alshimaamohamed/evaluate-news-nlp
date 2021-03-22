var path = require('path')
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const axios=require('axios');
const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'))

dotenv.config();
console.log(app)


app.post('/GetNLPData',async (req, res) => {
    try{
   const meaningcloudUrl="https://api.meaningcloud.com/sentiment-2.1";
   const meaningcloudApiKey=process.env.API_KEY;
   const receivedURL=req.body.url
 
    axios.get(`${meaningcloudUrl}?key=${meaningcloudApiKey}&url=${receivedURL}&lang=en`)
    .then(function(response){
        const {confidence,score_tag,agreement}=response.data
        res.send({
            confidence,
            score_tag,
            agreement
        });
       
    })
}catch(error){
    res.status(500).send(error)
}

});



app.listen(8081, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port 8081!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
