import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <header>
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
            <Link to="/mentoria">Mentoria</Link>
            <Link to="/eventos">Eventos</Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
