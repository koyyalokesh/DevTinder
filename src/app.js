const express = require('express');
const app = express();
const port = 7777;
app.use((req,res)=>{
    res.send('hello lokesh koyya');
})
app.listen(port, ()=>{
    console.log("server listening on port number: ",port);
});