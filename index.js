const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hey Snehal,Here is the Dynamic Website.")
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
