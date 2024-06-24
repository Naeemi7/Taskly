import { Route, Routes } from "react-router-dom";
import "@styles/App.scss";
import UserProvider from "@provider/UserProvider";
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
          <Route path="/" element={<Main />}></Route>
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
