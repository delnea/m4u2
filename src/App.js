import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import ApartamentosPage from "./pages/ApartamentosPage";
import ServiciosPage from "./pages/ServiciosPage";
import GaleriaPage from "./pages/GaleriaPage";
import ContactoPage from "./pages/ContactoPage";


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/apartamentos" element={<ApartamentosPage/>} />
            <Route path="/servicios" element={<ServiciosPage/>} />
            <Route path="/galeria" element={<GaleriaPage/>} />
            <Route path="/contacto" element={<ContactoPage/>} />
          </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
