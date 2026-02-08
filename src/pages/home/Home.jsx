import ImagemPrincipal from "../../assets/images/imgPrincipal.png";
import Button from "../../components/button/Button";
import CardEstatisticas from "../../components/cardEstatisticas/CardEstatisticas";
import S from "./home.module.scss";
const Home = () => {
  return (
    <main className={S.main}>
      <section className={S.info}>
        <h1>Projetos Sociais que transformam</h1>
        <div>
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </div>
        <Button isButtonSecondary hasIcon>
          Cadastrar Empresa
        </Button>

        <section className={S.infoDados}>
          <CardEstatisticas title="500+" text="Empresas Voluntárias" />
          <CardEstatisticas title="1.2K+" text="Projetos Realizados" />
          <CardEstatisticas title="50K+" text="Vidas Impactadas" />
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
