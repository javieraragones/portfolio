import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experiencia</h3>
        <span className="about__subtitle">+ 2 Años</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Proyectos realizados</h3>
        <span className="about__subtitle">+20 proyectos</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>

        <h3 className="about__title">Disponibilidad</h3>
        <span className="about__subtitle">Lunes a viernes</span>
      </div>
    </div>
  );
};

export default Info;
