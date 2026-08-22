import axios from "axios";

const API = "http://localhost:8000/api/blood";

export const postBlood = (bloodData) => {
    return axios.post(
        `${API}/post-blood`,
        bloodData
    );
};

export const getAvailableBlood = () => {
    return axios.get(
        `${API}/available`
    );
};