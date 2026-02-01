import ImagemPrincipal from "../../assets/images/imgPrincipal.png";
const Home = () => {
  return (
    <section>
      <div>
        <h1>Projetos Sociais que transformam</h1>
        <div>
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </div>
        <button>Cadastrar Empresa</button>
        <div>
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
        </div>
      </div>
      <div>
        <img
          src={ImagemPrincipal}
          alt="Imagem mãos  segurando  bonecos dando  as  mãos ao redor de um globo terrestre"
        />
      </div>
    </section>
  );
};

export default Home;
