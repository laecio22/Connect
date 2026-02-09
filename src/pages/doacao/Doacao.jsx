import InfoCard from "../../components/infoCard/InfoCard";
import IGfamilia from "../../assets/images/IGfamilia.png";
import ImageLivros from '../../assets/images/imagemLivros.png';
import ImagemComputadores from '../../assets/images/imagemComputadores.png';
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
            img={ImageLivros}
            alt="Imagem de livros  em uma  estante"
            subtitulo="Projeto Futuro na Escola"
            paragrafo="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
            textBotao="Quero Doar"
          />
        </article>
        <article>
          <InfoCard
            img={ImagemComputadores}
            alt="Imagem de gabinetes  de  computadores"
            subtitulo="Instituto Conecta  Jovem"
            paragrafo="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
            textBotao="Quero Doar"
          />
        </article>
      </section>
    </main>
  );
};

export default Doacao;
