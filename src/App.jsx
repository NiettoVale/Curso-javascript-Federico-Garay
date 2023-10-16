import Preguntas from "./Components/1) Juego de Preguntas/Preguntas";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Calculadora from "./Components/2) Calculadora web/Calucladora";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/1" element={<Preguntas />} />
        <Route path="/project/2" element={<Calculadora />} />
        <Route path="/project/3" element={<Preguntas />} />
        <Route path="/project/4" element={<Preguntas />} />
        <Route path="/project/5" element={<Preguntas />} />
        <Route path="/project/6" element={<Preguntas />} />
        <Route path="/project/7" element={<Preguntas />} />
        <Route path="/project/8" element={<Preguntas />} />
        <Route path="/project/9" element={<Preguntas />} />
        <Route path="/project/10" element={<Preguntas />} />
        <Route path="/project/11" element={<Preguntas />} />
        <Route path="/project/12" element={<Preguntas />} />
        <Route path="/project/13" element={<Preguntas />} />
      </Routes>
    </>
  );
}

export default App;
