
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/logo.png";
import '../styles/header.css';
import { faBell, faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import { useBookContext } from "../context/bookContext";
import { useUserContext } from "../context/userContext";
import { useCartContext } from "../context/cartContext";
    
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
    const {resetCart} = useCartContext();
    const [search, setSearch] = useState("");


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/books/none/none/${search==="" ? "none": search}`);
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container-fruid header" id="header">
                <div className="container-fluid">
                    <a onClick={() => navigate("/")} className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <div>

                        </div>
                        <li className="nav-item">
                        <a onClick={() => navigate("/")} className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {categories?.map(category => (
                                    <li><a className="dropdown-item" href="#" onClick={() => navigate(`/books/${category.id}/none/none`)}>{category.name}</a></li>
                                ))}
                            </ul>
                        </li>
                        <li className="nav-item">
                        <a onClick={() => navigate("/books/none/none/none")} className="nav-link active" aria-current="page" href="#">Books</a>
                        </li>
                        <li className="nav-item">
                        <a onClick={() => navigate("/aboutUs")} className="nav-link active" aria-current="page" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a onClick={() => navigate("/contact")} className="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex mt-3">
                        <input style={{width: "45vh"}} value={search} onChange={(e) => setSearch(e.target.value)} className="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
                    </form>
                    <ul className="navbar-nav account" id="personality">
                        {user && (
                            <>
                                <li onClick={() => {
                                    navigate("/cart")
                                }} className="nav-item account ">
                                    <a className="nav-link" href="#">
                                        <FontAwesomeIcon icon={faCartArrowDown}/>
                                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                    </a>
                                </li>
                            
                                <li className="dropdown nav-item">
                                    <button className="dropdown-toggle btn btn-secondary"  id="testDropdown" type="button" data-bs-toggle="dropdown">
                                        <FontAwesomeIcon icon={faBell}/>
                                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        {notifications?.map((notification) => (
                                            <li><a className="dropdown-item" href="#">{notification}</a></li>
                                        ))}
                                    </ul>
                                </li>
                            </>
                        )}
                        <li className="dropdown nav-item">
                            <button className="btn btn-secondary dropdown-toggle" id="testDropdown" type="button" data-bs-toggle="dropdown">
                            <FontAwesomeIcon icon={faUser}/>
                            </button>
                            <ul className="dropdown-menu">
                                {user ? (
                                    <>
                                        <li><a className="dropdown-item" onClick={() => navigate(`/profile/${cookies.get("user")?.email}`)} href="#">Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Setting</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#"onClick={() => {
                                                        handleLogout();
                                                        navigate("/auth");
                                                        resetCart();
                                            
                                                    }}>Logout</a>
                                        </li>
                                    
                                    </>
                                ): (
                                    <li onClick={() => navigate("/auth")}><a className="dropdown-item" href="#">Login</a></li>
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