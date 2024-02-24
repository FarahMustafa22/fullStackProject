const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


const {MongoClient}=require('mongodb')
const connection="mongodb+srv://farahradi123:faraharab@cluster0.fwnxl8j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client= new MongoClient(connection)

const mydb= client.db('test') 

const collection= mydb.collection('user') 

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.get("/message", (req, res) => {
    const data = {
        message:"Hello"
      };
    res.send(data);
  });
  

app.get("/getdata", (req, res) => {
  
  const data = {
    name: "Farah",
    age: 21,
    feild:"IT/CS"
  };
  res.json(data);
});


app.get("/getprice", (req, res) => {
  
  const prices = {
    product1: 10,
    product2: 20,
    product3: 30
  };
  res.json(prices);
});

app.get('/users', async(req,res)=>{
  const users= await collection.find({}).toArray()
  res.send(users)
})

app.get('/user/:name', async(req,res)=>{
  const users= await collection.findOne({'userName:': req.params.userName})
  res.send(users)
})
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

