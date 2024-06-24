import { Route, Routes } from "react-router-dom";
import "@styles/App.scss";
import Navbar from "@features/Navbar/Navbar";
import Main from "@features/Main/Main";
import AddTask from "@features/AddTask/AddTask";
import Footer from "@features/Footer/Footer";

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
