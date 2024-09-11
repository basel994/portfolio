import "./Header.css";
import { useContext, useEffect, useRef, useState } from "react";
import { ModeContext } from "../../context/modeProvider/ModeProvider";
import dark from "./../../assest/dark.png";
import sun from "./../../assest/sun.png";
import B from "./../../assest/images/logo.png";
import { menu } from "./menu";

const Header = () => {
    const {mode,changeMode} = useContext(ModeContext);
    const updateMode = () => {
        if(mode==="dark") {
            changeMode("light");
        }
        else changeMode("dark");
    }
    useEffect(()=>{
        if(mode==="dark"){
            linksRef.current?.classList.remove("dropdown-menu-light");
            linksRef.current?.classList.add("dropdown-menu-dark");
        }
        else{
            linksRef.current?.classList.remove("dropdown-menu-dark");
            linksRef.current?.classList.toggle("dropdown-menu-light");
        }
    },[mode])
    const linksRef = useRef<HTMLUListElement>(null);
    const toggleRef = useRef<HTMLSpanElement>(null);
    const [isClicked,setIsClicked] = useState(false);
    const collapseClicked = () => {
        setIsClicked(!isClicked);
        if (isClicked) {
            linksRef.current?.classList.add("open");
            toggleRef.current?.classList.add("xBar");
        }
        else {
            linksRef.current?.classList.remove("open");
            toggleRef.current?.classList.remove("xBar");
        }
        
    }
    const [scroll, setScroll] = useState("");
    const [y, setY] = useState(window.scrollY);
    const controlNavbar = () => {
        window.scrollY > y?setScroll("down"):setScroll("up");
        setY(window.scrollY);
    };  
  
    useEffect(() => {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }, [y]);
    return (
        <header>
            <div className={` ${scroll==="up"?"navbar navbar-outView":(scroll==="down"?"navbar navbar-slideUp":"navbar")} ${mode==="dark"?"navbar-dark":"navbar-light"}`}>
                <div className="logo">
                    <img src={B} alt="B" />
                    <div>asel Balkees</div>
                </div>
                <ul className="links dropdown-menu" ref={linksRef}>
                    {
                        menu.map((link:{name:string,href:string},index:number) => {
                            return(
                                <li key={index}><a href={link.href}>{link.name}</a></li>
                            )
                        })
                    }
                </ul>
                <div className="light-mode">
                    <img src={mode==="dark"?sun:dark} alt="light" onClick={updateMode} />
                </div>
                <div className="toggle-btn" onClick={collapseClicked}>
                    <span className="bar" ref={toggleRef}></span>
                </div>
            </div>
        </header>
    )
}
export default Header;