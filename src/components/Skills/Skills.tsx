import "./Skills.css";
import skills from "./../../assest/images/skills4.webp";
import html from "./../../assest/images/icons8-html-480.png";
import css from "./../../assest/images/icons8-css-480.png";
import sass from "./../../assest/images/icons8-sass-480.png";
import bootstrap from "./../../assest/images/icons8-bootstrap-480.png";
import javascript from "./../../assest/images/icons8-javascript-480.png";
import typescript from "./../../assest/images/icons8-typescript-480.png";
import react from "./../../assest/images/icons8-react-480.png";
import redux from "./../../assest/images/icons8-redux-480.png";
import { useRef } from "react";
import useInViewPort from "../../useInViewPort/useInViewPort";
const Skills = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const rightIninViewport = useInViewPort(rightRef,{threshold:0});
  const leftIninViewport = useInViewPort(leftRef,{threshold:0});
    return(
        <div className="skills" id="mySkills">
            <div className={`left-skills-side ${leftIninViewport?"from-left":null}`} ref={leftRef}>
              <h1>Skills :</h1>
              <p>Creating and developing interactive, responsive, and user-friendly web designs using :</p>
              <div className="skills-list">
                <p>Html <img src={html} alt="HTML" /></p>
                <p>Css <img src={css} alt="CSS" /></p>
                <p>Sass <img src={sass} alt="SASS" /></p>
                <p>Bootstrap <img src={bootstrap} alt="BOOTSTRAP" /></p>
                <p>Javascript <img src={javascript} alt="JAVASCRIPT" /></p>
                <p>Typescript <img src={typescript} alt="TYPESCRIPT" /></p>
                <p>React <img src={react} alt="REACT" /></p>
                <p>Redux <img src={redux} alt="REDUX" /></p>
              </div>
            </div>
            <div className={`right-skills-side ${rightIninViewport?"from-right":null}`} ref={rightRef}>
                <img src={skills} alt="SKILLS" />
            </div>
        </div>
    )
}
export default Skills;