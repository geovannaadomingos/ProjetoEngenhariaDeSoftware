import React from "react";
import "./Card.css";
import Eye from "../assets/eye.png";

function Card(props) {
  const {
    title,
    courseCode,
    credits,
    semester,
    professor,
    author,
    subject,
    views,
  } = props;

  return (
    <div className="card">
      <div className="header">
        <div className="rectangle" />
        <div className="title">{title}</div>
        <div className="views">
          <div className="text-views">{views}</div>
          <img className="eye" alt="Eye" src={Eye} />
        </div>
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
