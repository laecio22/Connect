import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import PhotoPerfil from "../../assets/images/laecio.jpg";
import S from "./header.module.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function menuMobile() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuAberto(false);
      }
    }

    window.addEventListener("resize", menuMobile);
    return () => window.removeEventListener("resize", menuMobile);
  }, []);
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
        {!isMobile && (
          <nav className={S.nav}>
            <Link to="/doacao">Doação</Link>
            <Link to="/voluntariado">Voluntariado</Link>
            <Link to="/mentoria">Mentorias</Link>
            <Link to="/eventos">Eventos</Link>
          </nav>
        )}

        <img
          src={PhotoPerfil}
          alt="Minha foto  do perfil de usuário"
          className={S.imgUser}
          onClick={() => setMenuAberto(!menuAberto)}
        />
      </header>      
        <nav className={menuAberto ? S.navUser : S.closedNav}>
          <Link to="/usuario" onClick={()=>setMenuAberto(false)} >Laécio da Conceição</Link>
          <Link onClick={()=>setMenuAberto(false)}>Meu Voluntariado</Link>
          <Link onClick={()=>setMenuAberto(false)}>Configurações de Conta</Link>
          {isMobile && (
            <div>
              <Link to="/doacao" onClick={()=>setMenuAberto(false)}>Doação</Link>
              <Link to="/voluntariado" onClick={()=>setMenuAberto(false)}>Voluntariado</Link>
              <Link to="/mentoria" onClick={()=>setMenuAberto(false)}>Mentorias</Link>
              <Link to="/eventos" onClick={()=>setMenuAberto(false)}>Eventos</Link>
            </div>
          )}
          <Link to="/" onClick={()=>setMenuAberto(false)}>Sair</Link>
        </nav>
      
    </>
  );
};

export default Header;
