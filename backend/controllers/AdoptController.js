const Adoption =
require("../models/Adoption");

const Pet =
require("../models/Pet");

exports.createAdoption =
async(req,res)=>{

const adoption =
await Adoption.create(req.body);

if (req.body.petId) {
  await Pet.findByIdAndUpdate(
    req.body.petId,
    {
      adoptionStatus: "Pending"
    }
  );
}

res.status(201).json(adoption);

};

exports.getAllAdoptions =
async(req,res)=>{

const adoptions =
await Adoption.find()
.populate("petId");

res.json(adoptions);

};