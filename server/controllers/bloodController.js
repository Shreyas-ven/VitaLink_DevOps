const Blood = require("../models/bloodModel");


const createBlood = async(req,res)=>{


try{


const blood = new Blood(req.body);

await blood.save();


res.status(201).send({

success:true,
message:"Blood Posted Successfully",

});

}


catch(error){

console.log(error);

res.status(500).send({

success:false,
message:"Error while posting blood"

});

}

};



const getAvailableBlood = async(req,res)=>{


try{


const blood = await Blood.find({

status:"Available"

}).populate(

"hospitalId",
"hospitalName"

);


res.status(200).send({

success:true,
blood,

});


}


catch(error){

console.log(error);

res.status(500).send({

success:false,
message:"Error"

});

}

};



module.exports={

createBlood,
getAvailableBlood,

};