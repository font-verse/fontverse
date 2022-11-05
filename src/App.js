// import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import Upload from "./pages/UploadFont";
import ConfirmPage from "./pages/Confirm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Font from "./pages/Font";

function App() {
  return (
    <div className="min-h-screen bg-dark-200 w-full ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/font/:fontName" element={<Font />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
