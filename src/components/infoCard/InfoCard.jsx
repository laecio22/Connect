import S from "./infoCard.module.scss";
import Button from "../button/Button";
import Swal from "sweetalert2";

const InfoCard = (props) => {
  const mostrarAlert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Inscrito  com sucesso!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <article className={S.article}>
      <img src={props.img} alt={props.alt} />
      <h2>{props.subtitulo}</h2>
      <p>{props.paragrafo}</p>
      {props.segundoParagrafo && <p>{props.segundoParagrafo}</p>}
      <Button handleClick={mostrarAlert}>{props.textBotao}</Button>
    </article>
  );
};

export default InfoCard;
