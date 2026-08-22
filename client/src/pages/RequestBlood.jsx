import { useState } from "react";
import { useLocation } from "react-router-dom";
import { createBloodRequest }
from "../services/bloodRequestService";

import "../styles/RequestBlood.css";

const RequestBlood = () => {

    const location = useLocation();

    const blood = location.state?.blood;

    const [patientName, setPatientName] = useState("");
    const [patientAge, setPatientAge] = useState("");
    const [bloodGroup, setBloodGroup] = useState(
        blood?.bloodGroup || ""
    );

    const [quantityRequired, setQuantityRequired] = useState("");

    const [urgencyLevel, setUrgencyLevel] = useState("");

    const [reason, setReason] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const requestData = {

                bloodId: blood._id,
                donorHospitalId: blood.hospitalId._id,
                requestingHospitalId:
                localStorage.getItem("hospitalId"),

                patientName,
                patientAge,
                bloodGroup,
                quantityRequired,
                urgencyLevel,
                reason,

            };

            const response =
            await createBloodRequest(requestData);

            alert(response.data.message);

        }

        catch(error){

            console.log(error);

        }

    };


    return (
    <div className="request-blood-container">

        <div className="request-blood-card">

            <div className="request-blood-header">
                <h1>Request Blood</h1>
                <p>
                    Submit a blood request for your patient
                </p>
            </div>

            <form
                className="request-blood-form"
                onSubmit={handleSubmit}
            >

                <div className="form-group">
                    <label>Patient Name</label>

                    <input
                        type="text"
                        placeholder="Enter patient name"
                        value={patientName}
                        onChange={(e) =>
                            setPatientName(e.target.value)
                        }
                    />
                </div>


                <div className="form-group">
                    <label>Patient Age</label>

                    <input
                        type="number"
                        placeholder="Enter patient age"
                        value={patientAge}
                        onChange={(e) =>
                            setPatientAge(e.target.value)
                        }
                    />
                </div>


                <div className="form-group">
                    <label>Blood Group</label>

                    <input
                        type="text"
                        value={bloodGroup}
                        readOnly
                        className="readonly-input"
                    />
                </div>


                <div className="form-group">
                    <label>Quantity Required</label>

                    <input
                        type="number"
                        placeholder="Enter quantity in units"
                        value={quantityRequired}
                        onChange={(e) =>
                            setQuantityRequired(e.target.value)
                        }
                    />
                </div>


                <div className="form-group">
                    <label>Urgency Level</label>

                    <select
                        value={urgencyLevel}
                        onChange={(e) =>
                            setUrgencyLevel(e.target.value)
                        }
                        required
                    >
                        <option value="">
                            Select urgency level
                        </option>

                        <option value="Low">
                            Low
                        </option>

                        <option value="Medium">
                            Medium
                        </option>

                        <option value="High">
                            High
                        </option>

                        <option value="Critical">
                            Critical
                        </option>
                    </select>
                </div>


                <div className="form-group">
                    <label>Reason</label>

                    <textarea
                        placeholder="Enter reason for requesting blood"
                        value={reason}
                        onChange={(e) =>
                            setReason(e.target.value)
                        }
                        rows="5"
                    />
                </div>


                <button
                    type="submit"
                    className="send-request-btn"
                >
                    Send Blood Request
                    <span>→</span>
                </button>

            </form>

        </div>

    </div>
);

};

export default RequestBlood;