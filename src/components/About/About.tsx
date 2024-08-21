import "./About.css";
import basel from "./../../assest/images/basel.png";
import { useEffect } from "react";
const About = () => {
    useEffect(()=>{
        document.title = "About";
    },[])
    return(
        <div className="about">
            <div className="photo">
            <img src={basel} alt="Basel" />
            </div>
            <div className="graph">
                <h2>Hi i am Basel Balkees</h2>
            </div>
        </div>
    )
}
export default About;