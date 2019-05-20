const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const PORT =3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    //res.send('Hello from server.');
    res.status(200).send({message: 'Enrollment data received.'});
})


app.post('/enroll', function(req, res){
    console.log(req.body);
    // test error message
    //res.status(401).send({message: 'Enrollment data received.'});

})
app.listen(PORT, function() {
    console.log('Server running on local host, port  ' + PORT);
})
