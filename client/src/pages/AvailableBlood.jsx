import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAvailableBlood } from "../services/bloodService";
import "../styles/AvailableBlood.css";

const AvailableBlood = () => {
  const [blood, setBlood] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlood();
  }, []);

  const fetchBlood = async () => {
    try {
      const response = await getAvailableBlood();
      setBlood(response.data.blood);
    } catch (error) {
      console.error("Error fetching blood:", error);
    }
  };

  return (
    <div className="available-blood-container">

      <div className="available-blood-header">
        <h1 className="available-blood-title">
          Available Blood Units
        </h1>

        <p className="available-blood-subtitle">
          Find available blood units from verified hospitals
        </p>
      </div>

      {blood.length > 0 ? (
        <div className="blood-grid">

          {blood.map((item) => (
            <div className="blood-card" key={item._id}>

              <div className="blood-card-top">
                <div className="blood-group">
                  {item.bloodGroup}
                </div>

                <span className={`status-badge ${item.status?.toLowerCase()}`}>
                  {item.status}
                </span>
              </div>

              <div className="blood-info">

                <div className="info-row">
                  <span className="info-label">
                    Quantity
                  </span>

                  <span className="info-value quantity">
                    {item.quantity} Units
                  </span>
                </div>

                <div className="info-row">
                  <span className="info-label">
                    Hospital
                  </span>

                  <span className="info-value">
                    {item.hospitalId?.hospitalName || "N/A"}
                  </span>
                </div>

                <div className="info-row">
                  <span className="info-label">
                    Blood Group
                  </span>

                  <span className="info-value">
                    {item.bloodGroup}
                  </span>
                </div>

              </div>

              <button
                className="request-btn"
                onClick={() =>
                  navigate("/request-blood", {
                    state: {
                      blood: item,
                    },
                  })
                }
              >
                Request Blood
                <span className="arrow">→</span>
              </button>

            </div>
          ))}

        </div>
      ) : (
        <div className="empty-message">
          <div className="empty-icon">🩸</div>

          <h2>No Blood Available</h2>

          <p>
            There are currently no blood units available.
          </p>
        </div>
      )}

    </div>
  );
};

export default AvailableBlood;