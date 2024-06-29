import { Route, Routes } from "react-router-dom";
import Sidebar from "@features/Dashboard/Sidebar/Sidebar";
import Navbar from "@features/Navbar/Navbar";
import Calender from "@features/Dashboard/Calender/Calender";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-layout">
        <Sidebar />
        <div className="dashboard-content">
          <Routes>
            <Route path="calender" element={<Calender />} />
            {/* Add more routes for other dashboard components here */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
