const express = require("express");

const router = express.Router();


const{

createBlood,
getAvailableBlood,

}=require("../controllers/bloodController");



router.post(

"/post-blood",

createBlood

);


router.get(

"/available-blood",

getAvailableBlood

);


module.exports = router;