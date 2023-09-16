import "./Card.css";

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
      <div className="details">
        <h4 className="details-h4">{titulo}</h4>
        <p className="details-p">Professor(a): {professor}</p>
        <p className="details-p">Autor(a): {autor}</p>
        <p className="details-p">Assunto: {assunto}</p>
        <p className="details-p">Curso: {curso}</p>
      </div>
      <div className="footer">
        <div className="footer-div">{semestre}</div>
        <div className="footer-div">{periodo} período</div>
        <div className="footer-div">{codigoDisciplina}</div>
      </div>
    </div>
  );
}

export default Card;
