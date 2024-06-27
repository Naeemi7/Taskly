import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "@styles/App.scss";
import { setupInterceptors } from "@api/axiosIntercepters";
import UserProvider from "@provider/UserProvider";
import ProtectedRoutes from "@auth/ProtectedRoutes/ProtectedRoutes";
import Navbar from "@features/Navbar/Navbar";
import Main from "@features/Main/Main";
import UserLogin from "@auth/UserLogin/UserLogin";
import UserLogout from "@auth/UserLogout/UserLogout";
import UserRegisteration from "@auth/UserRegisteration/UserRegisteration";
import AddTask from "@features/AddTask/AddTask";
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
          </Route>

          {/* Unprotected Routes */}
          <Route path="/" element={<Main />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-logout" element={<UserLogout />} />
          <Route path="/user-registeration" element={<UserRegisteration />} />
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
