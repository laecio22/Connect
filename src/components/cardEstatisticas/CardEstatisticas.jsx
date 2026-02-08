import S from './cardEstatisticas.module.scss';

const CardInfo = ({title, text}) => {
  return (
    <article className={S.article}>
       <h3>{title}</h3>
       <p>{text}</p>
    </article>
  )
}

export default CardInfo