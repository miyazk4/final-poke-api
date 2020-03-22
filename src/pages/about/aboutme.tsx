import React from "react";
import "./aboutme.scss";
import myself from "../../images/persona.png";

const AboutMe = () => {
  return (
    <main>
      <div className="aboutMeWrapper">
        <div className="aboutMeFlex">
          <div className="leftColumn">
            <div className="aboutMeImgContainer">
              <img className="aboutMeImg" src={myself} alt="" />
            </div>
            <div className="aboutMeSmDetails">
              <h2>Joana Santos</h2>
              <h3>Web Developer</h3>
              <p>
                <span className="far fa-envelope"></span>
                joanadossantos97@outlook.com
              </p>
              <p>
                <span className="fas fa-mobile-alt"></span>
                +351 917 625 455
              </p>
            </div>
          </div>
          <div className="rightColumn">
            <h1>About Me</h1>
            <p>
              Coming off as an oportunity in the summer of 2016, I was
              introduced to my first Web Developer Course by <a href="">FLAG</a>{" "}
              and developed a bigger taste in this area.
            </p>
            <p>
              Near the end of 2018 throughout most of 2019, once again, I had an
              opportunity to be a part of a more intense Web Developer Course
              and I set my mind that this is a profession I see myself doing for
              life, despite the difficulties faced sometimes.
            </p>
            <p>
              As of March 2020, I was accepted by <a href="">Agroop</a> to join
              their internship program where I use tools I had little or no
              contact at all, such as React, Sass and Typescript.
            </p>
            <p>
              This has been long journey and bit by bit I see my knowledge
              improving and am enjoying learning all sorts of new things and
              hope to keep seeing my growth throught good and bad times.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
