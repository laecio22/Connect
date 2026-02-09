import InfoCard from "../../components/infoCard/InfoCard";
import IGfamilia from "../../assets/images/IGfamilia.png";
import S from "../../Styles.module.scss";
const Doacao = () => {
  return (
    <main className={S.main}>
      <h1>Doação</h1>
      <section>
        <article>
          <InfoCard
            img={IGfamilia}
            alt="Imagem de  uma  pessoa  carregando uma  caixa  para  doação"
            subtitulo="Instituto  Grande  Família"
            paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            textBotao="Quero Doar"
          />
        </article>
        <article>
          <InfoCard
            img={IGfamilia}
            alt="Imagem de  uma  pessoa  carregando uma  caixa  para  doação"
            subtitulo="Instituto  Grande  Família"
            paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            textBotao="Quero Doar"
          />
        </article>
        <article>
          <InfoCard
            img={IGfamilia}
            alt="Imagem de  uma  pessoa  carregando uma  caixa  para  doação"
            subtitulo="Instituto  Grande  Família"
            paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            textBotao="Quero Doar"
          />
        </article>
      </section>
    </main>
  );
};

export default Doacao;
