const BloodRequest = require("../models/bloodRequestModel");


// CREATE REQUEST

const createBloodRequest = async (req, res) => {

    try {

        const request = new BloodRequest(req.body);

        await request.save();

        res.status(201).send({

            success: true,
            message: "Blood Request Sent Successfully"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).send({

            success: false,
            message: "Error"

        });

    }

};


// MY REQUESTS


const getMyBloodRequests = async (req, res) => {

    try {

        const hospitalId = req.params.hospitalId;

        const requests = await BloodRequest.find({

            requestingHospitalId: hospitalId

        })

        .populate("bloodId")
        .populate("donorHospitalId", "hospitalName");


        res.status(200).send({

            success: true,
            requests

        });

    }

    catch (error) {

        console.log(error);

    }

};




// INCOMING REQUESTS


const getIncomingBloodRequests = async (req, res) => {

    try {

        const hospitalId = req.params.hospitalId;


        const requests = await BloodRequest.find({

            donorHospitalId: hospitalId

        })

        .populate("bloodId")
        .populate("requestingHospitalId");


        res.status(200).send({

            success: true,
            requests

        });

    }

    catch (error) {

        console.log(error);

    }

};




// ACCEPT REQUEST


const acceptBloodRequest = async (req, res) => {

    try {

        const requestId = req.params.id;

        const request = await BloodRequest.findById(requestId);


        request.status = "Accepted";

        request.message =
        "Please collect blood units within 30 minutes.";


        await request.save();


        res.status(200).send({

            success: true,
            message: "Blood Request Accepted"

        });


    }

    catch (error) {

        console.log(error);

    }

};




// REJECT REQUEST


const rejectBloodRequest = async (req, res) => {

    try {

        const requestId = req.params.id;


        const request = await BloodRequest.findById(requestId);


        request.status = "Rejected";


        await request.save();


        res.status(200).send({

            success: true,
            message: "Blood Request Rejected"

        });

    }

    catch (error) {

        console.log(error);

    }

};



module.exports = {

    createBloodRequest,
    getMyBloodRequests,
    getIncomingBloodRequests,
    acceptBloodRequest,
    rejectBloodRequest

};