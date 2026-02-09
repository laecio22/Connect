import InfoCard from "../../components/infoCard/InfoCard";
import ImageReciclagem from "../../assets/images/mutirao-reciclagem.png";
import ImageTecnologia from '../../assets/images/aulas-tecnologia.png';
import ImageEsportes from '../../assets/images/esporte-inclusao.png';
import S from "../../Styles.module.scss";
const Voluntariado = () => {
  return (
    <main className={S.main}>
      <h1>Voluntariado</h1>
      <section>
        <article>
          <InfoCard
            img={ImageReciclagem}
            alt="Imagem de  pessoas  levando caixas  para  reciclagem"
            subtitulo="Mutirão de Reciclagem"
            paragrafo="Coletar materiais recicláveis e orientar sobre descarte consciente."
            textBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={ImageTecnologia}
            alt="Imagem de pessoas  em uma  aula  de  computação"
            subtitulo="Aulas  de  Tecnologia"
            paragrafo="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
            textBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={ImageEsportes}
            alt="Imagem de um grupo de  pessoas praticando atividade  física"
            subtitulo="Esporte  e Inclusão"
            paragrafo="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
            textBotao="Quero Participar"
          />
        </article>
      </section>
    </main>
  );
};

export default Voluntariado;
