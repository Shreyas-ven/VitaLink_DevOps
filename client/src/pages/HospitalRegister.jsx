import { useState } from "react";
import { registerHospital } from "../services/hospitalService";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HospitalRegister = () => {

  const [hospitalName, setHospitalName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const hospitalId = "HOSP" + Date.now();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    // Prevents page refresh when the form is submitted
    e.preventDefault();

    // Check if any field is empty
    if (
        !hospitalName ||
        !email ||
        !phone ||
        !address ||
        !password ||
        !confirmPassword
    ) {
        toast.warning("Please fill all the fields.");
        return;
    }

    // Check whether passwords match
    if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        return;
    }

    // Check password length
    if (password.length < 6) {
        toast.warning("Password should contain at least 6 characters.");
        return;
    }

    // Everything is valid
    try {

    const hospitalData = {

        hospitalId,
        hospitalName,
        email,
        phone,
        address,
        password

    };

    const response = await registerHospital(hospitalData);

    toast.success(
  `Hospital Registered Successfully!

Hospital: ${hospitalName}

Redirecting to Login...`
);

setTimeout(() => {
  navigate("/login");
}, 5000);

}
catch (error) {

    console.log(error);

    toast.error("Registration Failed");

}

};
  return (

<div className="register-container">

    <div className="register-card">

        <h1>VITALINK</h1>
        <h2>Hospital Registration</h2>

        <form
            onSubmit={handleSubmit}
            className="register-form"
        >

            <input
                type="text"
                placeholder="Hospital Name"
                value={hospitalName}
                onChange={(e) =>
                    setHospitalName(e.target.value)
                }
            />

            <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) =>
                    setPhone(e.target.value)
                }
            />

            <input
                type="text"
                placeholder="Hospital Address"
                value={address}
                onChange={(e) =>
                    setAddress(e.target.value)
                }
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />

            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) =>
                    setConfirmPassword(e.target.value)
                }
            />

            <button
                type="submit"
                className="register-btn"
            >
                Register Hospital
            </button>

        </form>

        <p className="login-text">
            Already have an account?
        </p>

        <Link
            to="/login"
            className="login-link"
        >
            Login Here
        </Link>

    </div>

</div>

);
};

export default HospitalRegister;