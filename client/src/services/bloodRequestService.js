import axios from "axios";


const API =
"http://localhost:8000/api/blood-request";



export const createBloodRequest = (data) => {

return axios.post(

`${API}/create-request`,
data

);

};



export const getMyBloodRequests = (hospitalId) => {

return axios.get(

`${API}/my-requests/${hospitalId}`

);

};



export const getIncomingBloodRequests = (hospitalId) => {

return axios.get(

`${API}/incoming/${hospitalId}`

);

};



export const acceptBloodRequest = (id) => {

return axios.put(

`${API}/accept/${id}`

);

};



export const rejectBloodRequest = (id) => {

return axios.put(

`${API}/reject/${id}`

);

};