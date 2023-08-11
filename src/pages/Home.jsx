import '../styles/home.css';
import freeShipping from '../images/features/f1.png';
import onlineOrder from '../images/features/f2.png';
import saveMoney from '../images/features/f3.png';
import promotions from '../images/features/f4.png';
import happySell from '../images/features/f5.png';
import support from '../images/features/f6.png';
import { useBookContext } from '../context/bookContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
export const Home = () => {
    const {books} = useBookContext();
    const navigate = useNavigate();


    return (
        <>
        <main>
            <section id="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>save more coupons & up to 70% off!</p>
                <button onClick={() => navigate("/books/none/none/none")}>Shop now</button>
            </section>

            <section id="features" class="section-p1">
                <div class="f-box">
                <img src={freeShipping} alt="free shipping" />
                <h6>Free shipping</h6>
                </div>
                <div class="f-box">
                <img src={onlineOrder} alt="online order" />
                <h6>online order</h6>
                </div>
                <div class="f-box">
                <img src={saveMoney} alt="save money" />
                <h6>save money</h6>
                </div>
                <div class="f-box">
                <img src={promotions} alt="promotions" />
                <h6>promotions</h6>
                </div>
                <div class="f-box">
                <img src={happySell} alt="happy sell" />
                <h6>happy sell</h6>
                </div>
                <div class="f-box">
                <img src={support} alt="24/7 support" />
                <h6>24/7 support</h6>
                </div>
            </section>

            <section class="product-section section-p1">
                <h1>Honor General</h1>
                <p>New experience about honor world</p>
                <div class="pro-collection">
                    {books?.slice(0, 9)?.map(book => (
                        <div class="product-cart" style={{cursor: "pointer"}}>
                            <img src={book.image} alt="product image" />
                            <span>{book.publisher}</span>
                            <h4>{book.title}</h4>
                            <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            </div>
                            <h4 class="price">${book.price}</h4>
                            <a href="#">
                                <FontAwesomeIcon onClick={() => navigate(`/book/${book.id}`)} icon={faSwatchbook}/>
                            </a>
                        </div>

                    ))}
                </div>
            </section>

            <section id="off-banner section-m1">
                <h4>Watch more about discount lable</h4>
                <h2>Many discount you must explore</h2>
                <button class="normal">Explore More</button>
            </section>

            <section class="product-section section-p1">
                <h1>Science Fictions</h1>
                <p>Enough new for a sciece world</p>
                <div class="pro-collection">
                {books?.slice(9, 17)?.map(book => (
                    <div class="product-cart" style={{cursor: "pointer"}}>
                        <img src={book.image} alt="product image" />
                        <span>{book.publisher}</span>
                        <h4>{book.title}</h4>
                        <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </div>
                        <h4 class="price">${book.price}</h4>
                        <a href="#"><FontAwesomeIcon onClick={() => navigate(`/book/${book.id}`)} icon={faSwatchbook}/></a>
                    </div>

                    ))}
                </div>
            </section>

            <section id="banners" class="section-p1">
                <div class="big-banners">
                <div class="big-banners-1">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The most discount for you</span>
                    <button class="banner-btn">Learn More</button>
                </div>
                <div class="big-banners-2">
                    <h4>spring/summer</h4>
                    <h2>upcomming season</h2>
                    <span>The best collection for you</span>
                    <button class="banner-btn">Collection</button>
                </div>
                </div>
                <div class="small-banners">
                <div class="small-banners-1">
                    <h2>SEASONAL SALE</h2>
                    <h5>Old book</h5>
                </div>
                <div class="small-banners-2">
                    <h2>NEW BOOK COLLECTION</h2>
                    <h5>Spring/Summer 2022</h5>
                </div>
                <div class="small-banners-3">
                    <h2>Honor</h2>
                    <h5>New Trendy Book</h5>
                </div>
                </div>
            </section>

            <section id="newsletter">
                <div class="newsletter-text">
                <h3>Sign Up For Newsletters</h3>
                <h5>get e-mail updates about out latest shop and <span>special offers</span></h5>
                </div>
                <div class="form">
                <input type="email" placeholder="Your email address" id="email-address-input"/>
                <button>Sign Up</button>
                </div>
            </section>

            </main>
        </>
    )
}