import ImagemPrincipal from "../../assets/images/imgPrincipal.png";
import S from './home.module.scss';
const Home = () => {
  return (
    <main className={S.main}>
      <section className={S.info}>
        <h1>Projetos Sociais que transformam</h1>
        <div>
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </div>
        <button>Cadastrar Empresa</button>
        <section className={S.infoDados}>
          <article>
            <h3>500+</h3>
            <p>Empresas Voluntárias</p>
          </article>
          <article>
            <h3>1.2k+</h3>
            <p>Empresas Voluntárias</p>
          </article>
          <article>
            <h3>50k+</h3>
            <p>Vidas Impactadas</p>
          </article>
        </section>
      </section>
        <img
          src={ImagemPrincipal}
          alt="Imagem mãos  segurando  bonecos dando  as  mãos ao redor de um globo terrestre"
        />   
    </main>
  );
};

export default Home;
