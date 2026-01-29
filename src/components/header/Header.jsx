import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import PhotoPerfil from '../../assets/images/laecio.jpg';
import S from './header.module.scss';

const Header = () => {
  return (
    <>
      <header className={S.header}>
        <section>
          <Link to="/">
            <img
              src={Logo}
              alt="logo da aplicação representado por uma  imagem de uma  mão segurando um coração"
            />
          </Link>
        </section>
        <nav>
          <ul>
            <Link to="/doacao">Doação</Link>
            <Link to="/voluntariado">Voluntariado</Link>
            <Link to="/mentoria">Mentorias</Link>
            <Link to="/eventos">Eventos</Link>
          </ul>
        </nav>
        <img src={PhotoPerfil} alt="Minha foto  do perfil de usuário" />
      </header>
      <Link to="/">Laécio da Conceição</Link>
    </>
  );
};

export default Header;
