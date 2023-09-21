import "./Card.css";
import eye from "../assets/eye.png";
import lixo from "../assets/lixo.png";
import MaterialService from '../services/MaterialService';

function Card(props) {
  const {
    id,
    titulo,
    codigoDisciplina,
    periodo,
    professor,
    autor,
    assunto,
    curso,
    url,
    userEmail,
    onDeleteMaterial
  } = props;

  const handleDelete = () => {
    MaterialService.deleteMaterial(id)
      .then(response => {
        console.log('Material excluído:', response);
        onDeleteMaterial();
      })
      .catch(error => {
        console.error('Erro ao excluir material:', error);
      });
  };

  return (
    <div className="card">
      {userEmail == autor && (
        <div className="delete-icon" onClick={handleDelete}>
          <img src={lixo} alt="Ícone de lixeira" className="deletar" />
        </div>
      )}
      <div className="rectangle" />
      <div className="header">
        <h4 className="header-h4">{titulo}</h4>
        <p className="header-p">Professor(a): {professor}</p>
        <p className="header-p">Autor(a): {autor}</p>
        <p className="header-p">Assunto: {assunto}</p>
        <p className="header-p">Curso: {curso}</p>
      </div>
      <div className="main">
        <div className="main-div">{periodo} período</div>
        <div className="main-div">{codigoDisciplina}</div>
      </div>

      <div className="footer">
        <a className="footer-a" href={url} target="_blank" rel="noreferrer">
          Visualizar material
          <img src={eye} alt="Icone de olho" className="footer-img" />
        </a>
      </div>
    </div>
  );
}

export default Card;
