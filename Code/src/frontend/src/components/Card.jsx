import "./Card.css";

function Card(props) {
  const {
    title,
    courseCode,
    credits,
    semester,
    professor,
    author,
    subject
  } = props;

  return (
    <div className="card">
      <div className="header">
        <div className="rectangle" />
        <div className="title">{title}</div>
      </div>
      <div className="details">
        <div className="professor">Professor(a): {professor}</div>
        <div className="author">Autor(a): {author}</div>
        <div className="subject">Assunto: {subject}</div>
      </div>
      <div className="footer">
        <div className="semester">{semester}</div>
        <div className="credits">{credits}</div>
        <div className="course-code">{courseCode}</div>
      </div>
    </div>
  );
}

export default Card;
