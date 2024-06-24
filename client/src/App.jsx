import { Route, Routes } from "react-router-dom";
import "@styles/App.scss";
import UserProvider from "@provider/UserProvider";
import ProtectedRoutes from "@auth/ProtectedRoutes/ProtectedRoutes";
import Navbar from "@features/Navbar/Navbar";
import Main from "@features/Main/Main";
import UserLogin from "@auth/UserLogin/UserLogin";
import AddTask from "@features/AddTask/AddTask";
import Footer from "@features/Footer/Footer";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Navbar />
        <Routes>
          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/add-task" element={<AddTask />} />
          </Route>
          <Route path="/" element={<Main />} />
          <Route path="/user-login" element={<UserLogin />} />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
