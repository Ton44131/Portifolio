import React from "react";
import "./Tecnologias.css";

import htmlImg from "../assets/tech/html.png";
import cssImg from "../assets/tech/css.png";
import jsImg from "../assets/tech/js.png";
import reactImg from "../assets/tech/react.png";
import nodeImg from "../assets/tech/node.png";
import phpImg from "../assets/tech/php.png";
import mysqlImg from "../assets/tech/mysql.png";
import javaImg from "../assets/tech/java.png";
import pythonImg from "../assets/tech/python.png";
import gitImg from "../assets/tech/git.png";

const tecnologias = [
  { nome: "HTML", img: htmlImg },
  { nome: "CSS", img: cssImg },
  { nome: "JavaScript", img: jsImg },
  { nome: "React", img: reactImg },
  { nome: "Node.js", img: nodeImg },
  { nome: "PHP", img: phpImg },
  { nome: "MySQL", img: mysqlImg },
  { nome: "Java", img: javaImg },
  { nome: "Python", img: pythonImg },
  { nome: "Git", img: gitImg },
];

export default function Tecnologias() {
  return (
    <section className="tecnologias" id="Technologies">
      <h2>Tecnologias</h2>

      <div className="tech-list">
        {tecnologias.map((tec) => (
          <div key={tec.nome} className="tech-item">
            <img src={tec.img} alt={tec.nome} />
            <p>{tec.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
