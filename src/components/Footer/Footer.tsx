import "./Footer.css";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return(
        <div className="footer" id="f">
            <h3>{`Made by Basel Balkees ${currentYear}`}</h3>
        </div>
    )
}
export default Footer;