import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Mentoria from "./pages/mentoria/Mentoria";
import Usuario from "./pages/usuario/Usuario";
import Doacao from "./pages/doacao/Doacao";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import EventosEP from "./pages/eventosEP/EventosEP";

import "./globalStyles.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doacao" element={<Doacao />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
          <Route path="/mentoria" element={<Mentoria />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/eventos" element={<EventosEP />} />
        </Routes>
      </BrowserRouter>
      <h1>Connect</h1>
    </>
  );
};

export default App;
