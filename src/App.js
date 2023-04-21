import "./styles/main.sass";
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import List from "./components/List";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
