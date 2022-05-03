const express = require('express');
const app = express();
const port = 3001;
// React Basic Port Number is 3000

app.get('/', (req,res) => {
    res.send('connection sussic!');
});

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`)
    // Not Quotes('). Using (`) <= this
});