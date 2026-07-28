import {useState} from "react";

import {

postBlood

}

from "../services/bloodService";


const PostBlood = ()=>{


const[bloodGroup,setBloodGroup]
=useState("");

const[quantity,setQuantity]
=useState("");

const[expiryDate,setExpiryDate]
=useState("");



const handleSubmit = async(e)=>{


e.preventDefault();


const bloodData={

bloodGroup,
quantity,
expiryDate,

hospitalId:
localStorage.getItem(
"hospitalId"
),

};


const response =
await postBlood(bloodData);


alert(response.data.message);

};



return(

<div>

<h1>
Post Blood
</h1>


<form
onSubmit={handleSubmit}
>


<select
value={bloodGroup}
onChange={(e)=>
setBloodGroup(
e.target.value
)}
>

<option>Select</option>
<option>A+</option>
<option>A-</option>
<option>B+</option>
<option>B-</option>
<option>AB+</option>
<option>AB-</option>
<option>O+</option>
<option>O-</option>

</select>


<br /><br />


<input

type="number"
placeholder="Quantity"

value={quantity}

onChange={(e)=>
setQuantity(
e.target.value
)}

 />


<br /><br />


<input

type="date"

value={expiryDate}

onChange={(e)=>
setExpiryDate(
e.target.value
)}

 />


<br /><br />


<button>

Post Blood

</button>

</form>

</div>

);


};


export default PostBlood;