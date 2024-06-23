import "@styles/App.scss";
import Navbar from "@Features/Navbar/Navbar";
import Main from "@Features/Main/Main";
import Footer from "@Features/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
