const express = require("express");

const {

createRequest,
getMyRequests,
getIncomingRequests,
acceptRequest,
rejectRequest

} = require("../controllers/requestController");


const router = express.Router();


router.post(
    "/create-request",
    createRequest
);
router.get(

"/my-requests/:hospitalId",

getMyRequests

);

router.get(

"/incoming/:hospitalId",

getIncomingRequests

);


router.put(

"/accept/:id",

acceptRequest

);


router.put(

"/reject/:id",

rejectRequest

);


module.exports = router;


