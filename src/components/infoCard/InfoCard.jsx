import S from './infoCard.module.scss'

const InfoCard = (props) => {
  return (
    <article className={S.article}>
       <img src={props.img} alt={props.alt} />
       <h2>{props.subtitulo}</h2>
       <p>{props.paragrafo}</p>
       <button>{props.textBotao}</button>
    </article>
  )
}

export default InfoCard