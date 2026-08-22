import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HospitalRegister from "./pages/HospitalRegister";
import HospitalLogin from "./pages/HospitalLogin";
import HospitalDashboard from "./pages/HospitalDashboard";
import PostOrgan from "./pages/PostOrgan";
import AvailableOrgans from "./pages/AvailableOrgans";
import RequestOrgan from "./pages/RequestOrgan";
import MyRequests from "./pages/MyRequests";
import IncomingRequests from "./pages/IncomingRequests";
import PostBlood from "./pages/PostBlood";
import AvailableBlood from "./pages/AvailableBlood";
import RequestBlood from "./pages/RequestBlood";
import MyBloodRequests from "./pages/MyBloodRequests";
import IncomingBloodRequests from "./pages/IncomingBloodRequests";
import BloodDashboard from "./pages/BloodDashboard";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<HospitalRegister />} />

        <Route path="/login" element={<HospitalLogin />} />

        <Route path="/dashboard" element={<HospitalDashboard />}/>

        <Route path="/organ/post" element={<PostOrgan />} />

        <Route path="/available-organs" element={<AvailableOrgans />}/>

        <Route path="/request-organ" element={<RequestOrgan />}/>

        <Route path="/my-requests" element={<MyRequests />}/>

        <Route path="/incoming-requests" element={<IncomingRequests />}/>

        <Route path="/post-blood" element={<PostBlood />}/>

        <Route
path="/available-blood"
element={<AvailableBlood />}
/>

<Route
path="/blood-dashboard"
element={<BloodDashboard />}
/>

<Route
path="/request-blood"
element={<RequestBlood />}
/>

<Route
path="/my-blood-requests"
element={<MyBloodRequests />}
/>

<Route
path="/incoming-blood-requests"
element={<IncomingBloodRequests />}
/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;