import { useEffect, useRef } from "react";
import "./Home.css";
import hello from "./../../assest/images/hello.png";
import developer from "./../../assest/images/welcome.webp";
import useInViewPort from "../../useInViewPort/useInViewPort";

const Home = () => {

    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const rightIninViewport = useInViewPort(rightRef,{threshold:0});
    const leftIninViewport = useInViewPort(leftRef,{threshold:0});
    return(
        <div className="home" id="main">
         <div className={`left-side ${leftIninViewport?"from-left":null}`} ref={leftRef}>
            <div className="hello">
            <h1>Hi all, i'm Basel Balkees</h1>
            <img src={hello} alt="hello" />
            </div>
            <div className="graph">
            <div className="info">
                <p>An information engineer, having an experience of designing and implementing web applications using React.</p>
                <p>Proven ability to build responsive webpages and develop user interface components with React.</p>
                <p>Proficient with Javascript and Typescript.</p>
                <p>Passionate about continuous learning and keeping up with developments in web programming languages.</p>
                </div>
                <div className="contact">
                    <button className="btn">See My Resume</button>
                </div>
            </div>
         </div>
         <div className={`right-side ${rightIninViewport?"from-right":null}`} ref={rightRef}>
            <img src={developer} alt="React developer" />
         </div>
        </div>
    )
}
export default Home;