import S from './infoCard.module.scss'
import Button from '../button/Button';

const InfoCard = (props) => {
  return (
    <article className={S.article}>
       <img src={props.img} alt={props.alt} />
       <h2>{props.subtitulo}</h2>
       <p>{props.paragrafo}</p>
       {props.segundoParagrafo && <p>{props.segundoParagrafo}</p>}
       <Button>{props.textBotao}</Button>     
    </article>
  )
}

export default InfoCard