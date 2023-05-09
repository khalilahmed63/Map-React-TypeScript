import "./App.css";
import HomeVariantA from "./components/VariantA/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/VariantA/Maps/Map";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeVariantA />} />
          {/* <Route path="/" element={<Map />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
