import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import PhotoPerfil from "../../assets/images/laecio.jpg";
import S from "./header.module.scss";
import { useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)
  return (
    <>
      <header className={S.header}>
        <section>
          <Link to="/">
            <img
              className={S.imgLogo}
              src={Logo}
              alt="logo da aplicação representado por uma  imagem de uma  mão segurando um coração"
            />
          </Link>
        </section>
        <nav className={S.nav}>
          <Link to="/doacao">Doação</Link>
          <Link to="/voluntariado">Voluntariado</Link>
          <Link to="/mentoria">Mentorias</Link>
          <Link to="/eventos">Eventos</Link>
        </nav>
        <img
          src={PhotoPerfil}
          alt="Minha foto  do perfil de usuário"
          className={S.imgUser}
          onClick={()=>setMenuAberto(!menuAberto)}
        />
      </header>
      <nav className={menuAberto ? S.navUser: S.closedNav}>
        <Link to="/usuario">Laécio da Conceição</Link>
        <Link to="/">Meu Voluntariado</Link>
        <Link to="/">Configurações  de Conta</Link>
        <Link to="/">Sair</Link>
      </nav>
    </>
  );
};

export default Header;
