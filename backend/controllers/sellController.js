const SellPet = require("../models/Sell");

exports.createSell =
async(req,res)=>{

const sell =
await SellPet.create(req.body);

res.status(201).json(sell);

};

exports.getAllSellRequests =
async(req,res)=>{

const data =
await SellPet.find();

res.json(data);

};