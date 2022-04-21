const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('amaro porane jaha chay tumi tai tumi taigo amaro porane jaha chay toma jhora aj a mone mor keho nai keho naigo amaro porane jaha chay')
});
app.use(cors());
app.use(express.json());
const users = [
    {
        id: 1, name: "jhankar mahbub", job: "sr. web-development",
        email: "jankar.mahbub1@gmail.com", phone: 0171111111, address: "America"
    },
    {
        id: 2, name: "subin", job: " software engineer",
        email: "developer-subin@gmail.com", phone: 0172222222, address: "singapur"
    },
    {
        id: 3, name: "sumit saha", job: "web-developer",
        email: "sumit.saha@gmail.com", phone: 0173333333, address: "Singapur"
    },
    {
        id: 4, name: "sumit saha", job: "web-developer",
        email: "sumit.saha@gmail.com", phone: 0173333333, address: "Singapur"
    },
    {
        id: 5, name: "sumit saha", job: "web-developer",
        email: "sumit.saha@gmail.com", phone: 0173333333, address: "Singapur"
    },

    {
        id: 6, name: "hasin haider", job: "hasin haider",
        email: "sumit.saha@gmail.com", phone: 0173333333, address: "Singapur"
    }
]

app.get('/users', (req, res) => {
    res.send(users)
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})
app.post('/user', (req, res) => {
    console.log("request", req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})
app.listen(port, () => {
    console.log('hiche naki cheak kori', port);
});