import "./ErrorPage.css";
import error from "./../../assest/error.png";

const ErrorPage = () => {
    return(
        <div className="error-page">
            <img src={error} alt="error" />
            <h2>
            404 Page not found
            </h2>
        </div>
    )
}
export default ErrorPage;