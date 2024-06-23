import { Route, Routes } from "react-router-dom";
import "@styles/App.scss";
import Navbar from "@Features/Navbar/Navbar";
import Main from "@Features/Main/Main";
import AddTask from "@Features/AddTask/AddTask";
import Footer from "@Features/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/" element={<Main />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
