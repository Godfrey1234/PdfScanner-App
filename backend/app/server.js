const express = require('express');
const app = express();
const bodyParser = require("body-parser");
//const db = require("../database Connection/db-config");
const routes = require("../routes/routes")


const cors = require('cors')

app.use(bodyParser.json());



app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//cors

app.use(cors({origin:'*'}))


app.get(`/`, (req, res) => { 

    res.send('<div style="width: 100%; height:100vh; display:flex; flex-direction:column;gap:1rem ; justify-content:center; place-items:center;"> <div style="width:100px; height:100px; background-color: green; border-radius:50%"></div><h1 style="font-family:sans-serif;padding:0;margin:0;"> Server is running</h1> <p style="padding:0;margin:0;font-family:sans-serif;">Ready to take your requests</p></div>');
 });



// Listen to the specified port, otherwise 3000
const PORT = process.env.PORT || 3000;
// .
const server = app.listen(PORT, () => {
  console.log(`Server Running: http://localhost:${PORT}`);
});



// if(db)
// {
//     console.log("Database is connected");
// }
app.use('/',routes)