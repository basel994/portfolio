import "./Education.css";
import education from "./../../assest/images/education.gif";
import useInViewPort from "../../useInViewPort/useInViewPort";
import { useRef } from "react";
const Education = () => {
    const eduRef = useRef<HTMLDivElement>(null);
    const inViewport = useInViewPort(eduRef, {threshold:0});
    return(
        <div className={`education ${inViewport?"show":null}`} id="myEducation" ref={eduRef}>
            <div className="left-education-side">
                <h1>Education</h1>
                <p>Bachelor's degree in Information Technology Engineering .</p>
                <p>University of Syria, Tartus .</p>
                <p>2013 - 2018</p>
            </div>
            <div className="right-education-side">
                <img src={education} alt="EDUCATION" />
            </div>
        </div>
    )
}
export default Education;