import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Mentoria from "./pages/mentoria/Mentoria.jsx";
import Usuario from "./pages/usuario/Usuario.jsx";
import Doacao from "./pages/doacao/Doacao.jsx";
import Voluntariado from "./pages/voluntariado/Voluntariado.jsx";
import EventosEP from "./pages/eventosEP/EventosEP.jsx";

import "./globalStyles.scss";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doacao" element={<Doacao />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
          <Route path="/mentoria" element={<Mentoria />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/eventos" element={<EventosEP />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
