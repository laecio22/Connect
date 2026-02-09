import S from "./usuario.module.scss";
import PhotoPerfil from "../../assets/images/laecio.jpg";
import IconEmail  from '../../assets/images/iconEmail.png';
import IconLocalizacao from '../../assets/images/iconLocal.png';
import IconCalendario from '../../assets/images/iconCalendario.png';
const Usuario = () => {
  return (
    <main className={S.main}>
      <section>
        <img src={PhotoPerfil} alt="Minha  foto  de  perfil de  usuário" className={S.imagePerfil}/>
        <div className={S.div}>
          <h1>Laécio da Conceição Viana</h1>
          <h2>Voluntário Ativo</h2>
          <p>
            Apaixonado por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>
          <ul>
            <li>
               <img src={IconLocalizacao} alt="ícone  de localização" />
               Altos Piauí
               </li>
            <li>
              <img src={IconEmail} alt="ícone de  email" />
              laecon22@hotmail.com
              </li>
            <li>
              <img src={IconCalendario} alt="ícone de calendário" />
              Membro desde Janeiro 2026
              </li>
          </ul>
          <ul>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Usuario;
