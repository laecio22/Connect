import S from "./button.module.scss";
import ArrowIcon from '../../assets/images/arrowIcon.png'

const Button = ({ children, isButtonSecondary, hasIcon }) => {
  
  return (
    <button
      className={ ` ${S.button} ${isButtonSecondary ? S.buttonSecondary : ""}` }
    >
      {children}
      {hasIcon && (
        <span><img src={ArrowIcon} alt="ícone  seta  para  direita" /></span>
      )}
    </button>
  );
};

export default Button;
