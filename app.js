const express = require('express');
const ip = require("ip");

const app = express();
const PORT = 3000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log(ip.address())
    else 
        console.log("Error occurred, server can't start", error);
    }
);