import * as React from "react";
import { CVCardProps } from "./cv-card.interface";
import "./cv-card.scss";

const CVCard: React.FC<CVCardProps> = ({ name, title, date, image }) => (
  <div className="card" style={{ width: "18rem" }}>
    {image && <img src={image} className="card-img-top" alt="cv-example" />}
    <div className="card-body">
      <div className="info">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{name}</p>
        {date && <p className="card-text">{date}</p>}
      </div>
      <div className="d-grid gap-2">
        <a href="/" className="btn btn-primary">
          Review
        </a>
      </div>
    </div>
  </div>
);

export { CVCard };
