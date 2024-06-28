import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "@styles/App.scss";
import { setupInterceptors } from "@api/axiosIntercepters";
import UserProvider from "@provider/UserProvider";
import ProtectedRoutes from "@auth/ProtectedRoutes/ProtectedRoutes";
import LandingPage from "@pages/LandingPage/LandingPage";
import HomePage from "@pages/HomePage/HomePage";
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage";
import Navbar from "@features/Navbar/Navbar";
import UserLogin from "@auth/UserLogin/UserLogin";
import UserLogout from "@auth/UserLogout/UserLogout";
import UserRegistration from "@auth/UserRegisteration/UserRegistration";
import AddTask from "@features/Tasks/AddTask/AddTask";
import Footer from "@features/Footer/Footer";

function App() {
  useEffect(() => {
    setupInterceptors();
  }, []);

  return (
    <div className="app">
      <UserProvider>
        <Navbar />
        <Routes>
          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/home" element={<HomePage />} />
          </Route>

          {/* Unprotected Routes */}
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-logout" element={<UserLogout />} />
          <Route path="/user-registration" element={<UserRegistration />} />
        </Routes>
        <Footer />
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "#749c75",
                color: "#fffafa",
              },
            },
            error: {
              style: {
                background: "#dd2d4a",
                color: "#fffafa",
              },
            },
          }}
        />
      </UserProvider>
    </div>
  );
}

export default App;
