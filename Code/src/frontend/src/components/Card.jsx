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
      <div className="header">
        <div className="rectangle" />
        <div className="title">{titulo}</div>
      </div>
      <div className="details">
        <div className="professor">Professor(a): {professor}</div>
        <div className="autor">Autor(a): {autor}</div>
        <div className="assunto">Assunto: {assunto}</div>
        <div className="curso">Curso: {curso}</div>
      </div>
      <div className="footer">
        <div className="semester">{semestre}</div>
        <div className="credits">{periodo} período</div>
        <div className="course-code">{codigoDisciplina}</div>
      </div>
    </div>
  );
}

export default Card;
