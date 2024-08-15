import { useContext } from "react";
import "./Header.css";
import { ModeContext } from "../../context/modeProvider/ModeProvider";
import dark from "./../../assest/dark.png";
import sun from "./../../assest/sun.png";

const Header = () => {
    const {mode,changeMode} = useContext(ModeContext);
    const updateMode = () => {
        if(mode==="dark") {
            changeMode("light");
        }
        else changeMode("dark");
    }
    return (
        <div className="header">
            <p className="logo">Basel Balkees</p>
            <ul className="menu">
                <li>الرئيسية</li>
                <li>تسجيل الدخول</li>
                <li>التسجيل</li>
                <li>حول</li>
            </ul>
            <div className="mode" onClick={updateMode}>
                <img src={mode==="dark"?sun:dark} alt="mode" />
            </div>
        </div>
    )
}
export default Header;