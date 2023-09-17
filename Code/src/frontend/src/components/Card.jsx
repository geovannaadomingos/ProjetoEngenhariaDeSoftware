import "./Card.css";
import download from "../assets/download.png";

function Card(props) {
  const {
    titulo,
    codigoDisciplina,
    periodo,
    semestre,
    professor,
    autor,
    assunto,
    curso
  } = props;

  return (
    <div className="card">
      <div className="rectangle" />
      <div className="header">
        <h4 className="header-h4">{titulo}</h4>
        <p className="header-p">Professor(a): {professor}</p>
        <p className="header-p">Autor(a): {autor}</p>
        <p className="header-p">Assunto: {assunto}</p>
        <p className="header-p">Curso: {curso}</p>
      </div>
      <div className="main">
        <div className="main-div">{semestre}</div>
        <div className="main-div">{periodo} período</div>
        <div className="main-div">{codigoDisciplina}</div>
      </div>
      <div className='footer'>
        <a className='footer-a' href="#">
          Fazer download
          <img
            src={download}
            alt="Icone de download"
            className='footer-img'
          />
        </a>
      </div>
    </div>
  );
}

export default Card;
