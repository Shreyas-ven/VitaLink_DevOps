import { useNavigate } from "react-router-dom";
import "../styles/BloodDashboard.css";

const BloodDashboard = () => {

    const navigate = useNavigate();

    return (

        <div className="blood-dashboard-container">

            <h1>Blood Management System</h1>

            <p className="blood-subtitle">
                Manage blood donations, requests and hospital coordination.
            </p>

            <div className="blood-dashboard-grid">

                <div className="blood-card">

                    <h2>Post Blood</h2>

                    <p>
                        Add blood units available in your hospital.
                    </p>

                    <button
                        onClick={() => navigate("/post-blood")}
                    >
                        Open
                    </button>

                </div>


                <div className="blood-card">

                    <h2>Available Blood</h2>

                    <p>
                        View blood units available across hospitals.
                    </p>

                    <button
                        onClick={() => navigate("/available-blood")}
                    >
                        Open
                    </button>

                </div>


                <div className="blood-card">

                    <h2>Request Blood</h2>

                    <p>
                        Send blood requests during emergencies.
                    </p>

                    <button
                        onClick={() => navigate("/available-blood")}
                    >
                        Open
                    </button>

                </div>


                <div className="blood-card">

                    <h2>My Blood Requests</h2>

                    <p>
                        Track all blood requests sent by your hospital.
                    </p>

                    <button
                        onClick={() => navigate("/my-blood-requests")}
                    >
                        Open
                    </button>

                </div>


                <div className="blood-card">

                    <h2>Incoming Requests</h2>

                    <p>
                        Manage incoming blood requests from hospitals.
                    </p>

                    <button
                        onClick={() => navigate("/incoming-blood-requests")}
                    >
                        Open
                    </button>

                </div>


                <div className="blood-card">

                    <h2>Back to Dashboard</h2>

                    <p>
                        Return to the Hospital Management Dashboard.
                    </p>

                    <button
                        onClick={() => navigate("/dashboard")}
                    >
                        Open
                    </button>

                </div>

            </div>

        </div>

    );

};

export default BloodDashboard;