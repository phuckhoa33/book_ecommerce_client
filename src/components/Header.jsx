
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/logo.png";
import '../App.css';
import { faBell, faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light container-fruid header" id="header">
                <div class="container-fluid">
                    <a onClick={() => navigate("/")} class="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <div>

                        </div>
                        <li class="nav-item">
                        <a onClick={() => navigate("/")} class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a onClick={() => navigate("/books")} class="nav-link active" aria-current="page" href="#">Books</a>
                        </li>
                        <li class="nav-item">
                        <a onClick={() => navigate("/aboutUs")} class="nav-link active" aria-current="page" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                        <a onClick={() => navigate("/contact")} class="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                    <form class="d-flex me-4">
                        <input width={500} class="form-control me-2 form-control-lg" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul class="navbar-nav" id="personality">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <FontAwesomeIcon icon={faBell}/>  
                            </a>
                        </li>
                        <li onClick={() => navigate("/cart")} class="nav-item">
                            <a class="nav-link" href="#">
                                <FontAwesomeIcon icon={faCartArrowDown}/>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <FontAwesomeIcon icon={faUser}/>
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )   
}