const express = require('express');
const app = express();
const port = 3001;
// React local 구동 시 기본값으로 port 3000을 들고 있으니 다른 port로 설정
const cors = require('cors');
const bodyParser = require('body-parser');

// app.통신방법('/통신할 주소',(req,res).......)
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send('connection sussic!');
});

app.post('/idplz', (req,res) => {
    const serverid = req.body.plzid;
    console.log(serverid);

    const sendText = {
        text: '언제나 삽질중',
    };
    res.send(sendText);
})

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`)
    // Not Quotes('). Using (`) <= this
});