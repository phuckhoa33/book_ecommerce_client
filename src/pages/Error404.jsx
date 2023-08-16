import { useNavigate } from 'react-router-dom';
import '../styles/error404.scss';

export const Error404 = () => {
    const navigate = useNavigate();
    return(
        <>
            <div className="error">
                <h1>4<span><i class="fas fa-ghost"></i></span>4</h1>
                <h2>Error: 404 page not found</h2>
                <p>Sorry, the page you're looking for cannot be accessed</p>
                <a className="btn btn-primary" href='#' onClick={() => navigate("/")}>Go Home</a>
            </div>
        </>
    )
}