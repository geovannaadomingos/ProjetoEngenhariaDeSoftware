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
    <div className="frame">
      <div className="group-wrapper">
        <div className="group">
          <div className="overlap">
            <div className="rectangle" />
            <div className="text-title">{title}</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="div">{courseCode}</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="div-wrapper">
                <div className="text-year">{credits}</div>
              </div>
            </div>
            <div className="group-2">
              <div className="overlap-2">
                <div className="text-semester">{semester}</div>
              </div>
            </div>
            <div className="text-professor">Professor(a): {professor}</div>
            <div className="text-author">Autor(a): {author}</div>
            <div className="text-subject">Assunto: {subject}</div>
            <div className="group-3">
              <div className="text-views">{views}</div>
              <img className="eye" alt="Eye" src={Eye} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
