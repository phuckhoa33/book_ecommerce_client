
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/logo.png";
import '../styles/header.css';
import { faBell, faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import { useBookContext } from "../context/bookContext";
import { useUserContext } from "../context/userContext";
    
const cookies = new Cookies();

export const Header = () => {
    const navigate = useNavigate();
    const {categories} = useBookContext();
    const [notifications, setNotifications] = useState([
        "Thông báo 1",
        "Thông báo 2",
        "Thông báo 3",
    ]);

    const {user, handleLogout} = useUserContext();
    const [search, setSearch] = useState("");


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
                                {categories?.map(category => (
                                    <li><a class="dropdown-item" href="#" onClick={() => navigate(`/books/${category.id}/${"none"}/${search}`)}>{category.name}</a></li>
                                ))}
                            </ul>
                        </li>
                        <li class="nav-item">
                        <a onClick={() => navigate("/books/none/none")} class="nav-link active" aria-current="page" href="#">Books</a>
                        </li>
                        <li class="nav-item">
                        <a onClick={() => navigate("/aboutUs")} class="nav-link active" aria-current="page" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                        <a onClick={() => navigate("/contact")} class="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                    <form class="d-flex mt-3">
                        <input style={{width: "45vh"}} value={search} onChange={(e) => setSearch(e.target.value)} class="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul class="navbar-nav account" id="personality">
                        {user && (
                            <>
                                <li onClick={() => {
                                    navigate("/cart")
                                }} class="nav-item account ">
                                    <a class="nav-link" href="#">
                                        <FontAwesomeIcon icon={faCartArrowDown}/>
                                        <span class="badge rounded-pill badge-notification bg-danger">1</span>
                                    </a>
                                </li>
                            
                                <li class="dropdown nav-item">
                                    <button class="dropdown-toggle btn btn-secondary"  id="testDropdown" type="button" data-bs-toggle="dropdown">
                                        <FontAwesomeIcon icon={faBell}/>
                                        <span class="badge rounded-pill badge-notification bg-danger">1</span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        {notifications?.map((notification) => (
                                            <li><a class="dropdown-item" href="#">{notification}</a></li>
                                        ))}
                                    </ul>
                                </li>
                            </>
                        )}
                        <li class="dropdown nav-item">
                            <button class="btn btn-secondary dropdown-toggle" id="testDropdown" type="button" data-bs-toggle="dropdown">
                            <FontAwesomeIcon icon={faUser}/>
                            </button>
                            <ul class="dropdown-menu">
                                {user ? (
                                    <>
                                        <li><a class="dropdown-item" onClick={() => navigate(`/profile/${cookies.get("user")?.email}`)} href="#">Profile</a></li>
                                        <li><a class="dropdown-item" href="#">Setting</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#"onClick={() => {
                                                        handleLogout();
                                                        navigate("/auth");
                                                    }}>Logout</a>
                                        </li>
                                    
                                    </>
                                ): (
                                    <li onClick={() => navigate("/auth")}><a class="dropdown-item" href="#">Login</a></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )   
}