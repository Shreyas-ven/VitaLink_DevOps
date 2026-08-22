import { useEffect,useState }
from "react";

import {

getIncomingBloodRequests,
acceptBloodRequest,
rejectBloodRequest

} from "../services/bloodRequestService";


const IncomingBloodRequests = ()=>{


const[requests,setRequests]
= useState([]);


useEffect(()=>{

fetchRequests();

},[]);


const fetchRequests = async()=>{

try{

const hospitalId =
localStorage.getItem("hospitalId");

const response =
await getIncomingBloodRequests(hospitalId);

setRequests(response.data.requests);

}

catch(error){

console.log(error);

}

};


const handleAccept = async(id)=>{

await acceptBloodRequest(id);

fetchRequests();

};


const handleReject = async(id)=>{

await rejectBloodRequest(id);

fetchRequests();

};


return(

<div>

<h1>
Incoming Blood Requests
</h1>

<hr />

{

requests.map((request)=>(

<div key={request._id}>

<p>
Blood Group :
{request.bloodGroup}
</p>

<p>
Requested By :
{request.requestingHospitalId?.hospitalName}
</p>

<p>
Patient :
{request.patientName}
</p>

<p>
Patient Age :
{request.patientAge}
</p>

<p>
Quantity :
{request.quantityRequired}
Units
</p>

<p>
Urgency :
{request.urgencyLevel}
</p>

<p>
Reason :
{request.reason}
</p>

<p>
Status :
{request.status}
</p>

<br />

<button
onClick={()=>
handleAccept(request._id)}
>

Accept

</button>


<button
onClick={()=>
handleReject(request._id)}
>

Reject

</button>

<hr />

</div>

))

}

</div>

);

};

export default IncomingBloodRequests;