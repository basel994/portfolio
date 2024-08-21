import { useEffect, useRef } from "react";
import "./Home.css";
import hello from "./../../assest/images/hello.png";
import developer from "./../../assest/images/welcome.webp";
import useInViewPort from "../../useInViewPort/useInViewPort";

const Home = () => {
    useEffect(()=>{
        document.title="Home"
    },[]);
    const divRef = useRef<HTMLDivElement>(null);
    const inViewport = useInViewPort(divRef,{threshold:0});
    return(
        <div className={`home ${inViewport?"show":null}`} ref={divRef} id="main">
         <div className="left-side">
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
         <div className="right-side">
            <img src={developer} alt="React developer" />
         </div>
        </div>
    )
}
export default Home;