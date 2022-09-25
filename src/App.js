import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import Upload from "./pages/UploadFont";
import ConfirmPage from "./pages/Confirm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/confirm" element={<ConfirmPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
