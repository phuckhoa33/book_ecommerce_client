
import logo from "../images/logo.png";
import pay from "../images/pay/pay.png";
import app from '../images/pay/app.jpg';
import play from '../images/pay/play.jpg';

export const Footer = () => {
    return (
        <>
            <footer>
                <div id="footer" style={{color: "black"}}>
                    <div className="contact">
                    <a href="indext.html"><img src={logo} alt="" /></a>
                    <br/> <br/>
                    <br/> 
                    <h3>Contact</h3>
                    <address>
                        <p><b>Address:</b> Wellington Road, Street 32. San Francisco</p>
                        <p><b>Phone:</b> Wellington Road, Street 32. San Francisco</p>
                        <p><b>Hours</b> 10:00 - 18:00. Mon - Sat</p>
                    </address>
                    <h3>Follow Us</h3>
                    <br/> 
                    <div className="socials">
                        <a href="#"><i className="fa-brands fa-facebook-square"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#"><i className="fa-brands fa-telegram"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                    </div>
                    <div className="about">
                    <h3>About</h3>
                    <br/> 
                    <a href="#">About Us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact Us</a>
                    </div>
                    <div className="myaccount ">
                    <h3>My account</h3>
                    <br/> 
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">Track My Order</a>
                    <a href="#">Help</a>
                    </div>
                    <div className="install">
                    <h3>Install App</h3>
                    <br/> 
                    <p>From App Store or Google Play</p>
                    <div className="download">
                        <a href="#"><img src={app} alt=""/></a>
                        <a href="#"><img src={play} alt=""/></a>
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src={pay} alt=""/>
                    </div>
                    
                </div>
            </footer>
        </>
    )
}