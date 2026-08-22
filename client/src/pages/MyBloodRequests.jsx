import { useEffect, useState } from "react";
import { getMyBloodRequests } from "../services/bloodRequestService";
import "../styles/MyBloodRequests.css";

const MyBloodRequests = () => {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const hospitalId =
                localStorage.getItem("hospitalId");

            const response =
                await getMyBloodRequests(hospitalId);

            setRequests(response.data.requests);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="my-requests-container">

            {/* Header */}

            <div className="my-requests-header">

                <h1 className="my-requests-title">
                    My Blood Requests
                </h1>

                <p className="my-requests-subtitle">
                    Track and monitor your blood requests
                </p>

            </div>


            {/* Requests */}

            {requests.length > 0 ? (

                <div className="requests-grid">

                    {requests.map((request) => (

                        <div
                            className="request-card"
                            key={request._id}
                        >

                            {/* Card Header */}

                            <div className="request-card-header">

                                <div className="request-blood-group">
                                    {request.bloodGroup}
                                </div>

                                <span
                                    className={`request-status ${request.status?.toLowerCase()}`}
                                >
                                    {request.status}
                                </span>

                            </div>


                            {/* Patient */}

                            <div className="request-section">

                                <h3>
                                    Patient Information
                                </h3>

                                <div className="request-row">

                                    <span className="request-label">
                                        Patient
                                    </span>

                                    <span className="request-value">
                                        {request.patientName}
                                    </span>

                                </div>

                            </div>


                            {/* Request Details */}

                            <div className="request-section">

                                <h3>
                                    Request Details
                                </h3>

                                <div className="request-row">

                                    <span className="request-label">
                                        Blood Group
                                    </span>

                                    <span className="request-value blood-value">
                                        {request.bloodGroup}
                                    </span>

                                </div>


                                <div className="request-row">

                                    <span className="request-label">
                                        Quantity
                                    </span>

                                    <span className="request-value">
                                        {request.quantityRequired} Units
                                    </span>

                                </div>

                            </div>


                            {/* Hospital */}

                            <div className="request-section">

                                <h3>
                                    Requested From
                                </h3>

                                <div className="hospital-name">

                                    {request.donorHospitalId?.hospitalName ||
                                        "Hospital information unavailable"}

                                </div>

                            </div>


                            {/* Message */}

                            {request.message && (

                                <div className="request-message">

                                    <span className="message-label">
                                        Message
                                    </span>

                                    <p>
                                        {request.message}
                                    </p>

                                </div>

                            )}

                        </div>

                    ))}

                </div>

            ) : (

                /* Empty State */

                <div className="no-requests">

                    <div className="no-requests-icon">
                        🩸
                    </div>

                    <h2>
                        No Blood Requests
                    </h2>

                    <p>
                        You haven't submitted any blood requests yet.
                    </p>

                </div>

            )}

        </div>
    );
};

export default MyBloodRequests;