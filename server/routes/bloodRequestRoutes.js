const express = require("express");

const router = express.Router();


const {

createBloodRequest,
getMyBloodRequests,
getIncomingBloodRequests,
acceptBloodRequest,
rejectBloodRequest

}

= require("../controllers/bloodRequestController");




router.post(

"/create-request",

createBloodRequest

);



router.get(

"/my-requests/:hospitalId",

getMyBloodRequests

);



router.get(

"/incoming/:hospitalId",

getIncomingBloodRequests

);



router.put(

"/accept/:id",

acceptBloodRequest

);



router.put(

"/reject/:id",

rejectBloodRequest

);



module.exports = router;