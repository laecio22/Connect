import InfoCard from "../../components/infoCard/InfoCard";
import ImagemReuniao from "../../assets/images/empoderando-jovens-futuro.png";
import ImagemObservacao from "../../assets/images/tecnologia-que-transforma.png";
import ImagemGestora from "../../assets/images/carreira-primeiro-emprego.png";
import S from "../../Styles.module.scss";
const EventosEP = () => {
  return (
    <main className={S.main}>
      <h1>Eventos e Palestras</h1>
      <section>
        <article>
          <InfoCard
            img={ImagemReuniao}
            alt="Imagem de  uma  reunião de  pessoas  jovens"
            subtitulo="Empoderando Jovens para  o Futuro"
            paragrafo="Atividade: Palestra motivacional sobre liderança jovem e transformação social."
            segundoParagrafo="Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
            textBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={ImagemObservacao}
            alt="Imagem de pessoas  observando  uma  pessoa  mexendo  no computador"
            subtitulo="Tecnologia  que  Transforma"
            paragrafo="Atividade: Workshop de introdução à programação e inovação digital."
            segundoParagrafo="Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
            textBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={ImagemGestora}
            alt="Imagem de uma gestora sorrindo em  uma  palestra"
            subtitulo="Carreira  e  Primeiro Emprego"
            paragrafo="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado. "
            segundoParagrafo="Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
            textBotao="Quero Participar"
          />
        </article>
      </section>
    </main>
  );
};

export default EventosEP;
