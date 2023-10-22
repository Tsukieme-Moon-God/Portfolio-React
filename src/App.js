import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assembly from "./components/assembly";
import Works from "./components/pages/works";
import Service from "./components/pages/service";
import Skilss from "./components/skilss/Skilss";
import Footer from "./components/footer/Footer";
import Navigation from "./components/pages/navigation";
import './media/media.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Assembly />} />
          <Route path="/works" element={<Works />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<Skilss></Skilss>} />
          <Route path="/contact" element={<Footer></Footer>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
