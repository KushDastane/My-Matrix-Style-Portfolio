import LandingMatrix from "./routes/LandingMatrix";
import Home from "./routes/Home";
import MainLayout from "./routes/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={1000} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingMatrix />} />
          <Route path="/home" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
