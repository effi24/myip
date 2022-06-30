const express = require('express');
const ip = require("ip");

const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send("your local ip is: " + ip.address()))
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server running on port: ",PORT )
    else 
        console.log("Error occurred, server can't start", error);
    }
);
