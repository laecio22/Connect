import InfoCard from "../../components/infoCard/InfoCard";
import ImageNegocios from "../../assets/images/mentoria-carreira-emprego.png";
import ImageExperiencia from '../../assets/images/compartilhe-experiencia.png';
import ImageAcompanhamento from '../../assets/images/acompanhamento.png';
import S from "../../Styles.module.scss";
const Mentoria = () => {
  return (
    <main className={S.main}>
      <h1>Mentoria</h1>
      <section>
        <article>
          <InfoCard
            img={ImageNegocios}
            alt="Imagem de  pessoas  realizando  negócios"
            subtitulo="Mentoria de Carreira e Emprego"
            paragrafo="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
            textBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={ImageExperiencia}
            alt="Imagem de pessoas  estudando"
            subtitulo="Compartilhe Experiência"
            paragrafo="Oriente jovens e profissionais iniciantes em sua área."
            textBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={ImageAcompanhamento}
            alt="Imagem de uma mulher ensinando, apontando  algo  no  computador"
            subtitulo="Acompanhamento"
            paragrafo="Participe como guia em jornadas de aprendizado e desenvolvimento."
            textBotao="Quero Participar"
          />
        </article>
      </section>
    </main>
  );
};

export default Mentoria;
