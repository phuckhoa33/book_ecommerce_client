
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/logo.png";
import '../styles/header.css';
import { faBell, faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
    const navigate = useNavigate();
    const [toolboxOpen, setToolboxOpen] = useState(false);
    const [toolboxNotiOpen, setToolboxNotiOpen] = useState(false);
    const [notifications, setNotifications] = useState([
        "Thông báo 1",
        "Thông báo 2",
        "Thông báo 3",
    ]);

    const toggleToolbox = (func, state, extra) => {
        func(!state);
        extra(false);
    };
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
                    <form class="d-flex mt-3">
                        <input style={{width: "45vh"}} class="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul class="navbar-nav account" id="personality">
                        <li class="nav-item">
                            <a class="nav-link active account-tag" onClick={() => toggleToolbox(setToolboxNotiOpen, toolboxNotiOpen, setToolboxOpen)} href="#">
                                <FontAwesomeIcon icon={faBell}/>  
                                <span class="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                            {toolboxNotiOpen && (
                                <div className="toolbox">
                                    {notifications?.map((notification) => (
                                        <a href="#">{notification}</a>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li onClick={() => {
                            navigate("/cart")
                            setToolboxNotiOpen(false);
                            setToolboxOpen(false);
                        }} class="nav-item account">
                            <a class="nav-link" href="#">
                                <FontAwesomeIcon icon={faCartArrowDown}/>
                                <span class="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                        </li>
                        <li class="nav-item account">
                            <a class="nav-link account-tag" href="#"  onClick={() => toggleToolbox(setToolboxOpen, toolboxOpen, setToolboxNotiOpen)}>
                                <FontAwesomeIcon icon={faUser}/>
                            </a>
                            {toolboxOpen && (
                                <div className="toolbox">
                                <a onClick={() => navigate("/auth")} href="#">Logout</a>
                                <a onClick={() => navigate("/profile/8")} href="#">profile</a>
                                </div>
                            )}
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )   
}