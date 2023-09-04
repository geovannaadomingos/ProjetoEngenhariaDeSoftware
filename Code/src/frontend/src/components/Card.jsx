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
            <div className="text-wrapper">{title}</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="div">{courseCode}</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-2">{credits}</div>
              </div>
            </div>
            <div className="group-2">
              <div className="overlap-2">
                <div className="text-wrapper-3">{semester}</div>
              </div>
            </div>
            <div className="text-wrapper-4">Professor(a): {professor}</div>
            <div className="text-wrapper-5">Autor(a): {author}</div>
            <div className="text-wrapper-6">Assunto: {subject}</div>
            <div className="group-3">
              <div className="text-wrapper-7">{views}</div>
              <img className="eye" alt="Eye" src={Eye} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
