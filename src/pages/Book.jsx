import { useNavigate, useParams } from 'react-router-dom';
import '../styles/book.scss';
import { useBookContext } from '../context/bookContext';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useCartContext } from '../context/cartContext';
import { useUserContext } from '../context/userContext';

export const Book = () => {
    const {bookId} = useParams();
    const navigate = useNavigate();
    const {books, bookCategories, categories} = useBookContext();
    const {cart} = useCartContext();
    const {user} = useUserContext();
    const {addNewItemIntoCart} = useCartContext();
    const [book, setBook] = useState();
    const [relatedBooks, setRelatedBooks] = useState();
    const [category, setCategory] = useState();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setQuantity(0);
        const findedBook = books?.find(book => book?.id==bookId);
        setBook(findedBook);
        const currentBookCategory = bookCategories?.map(bookCategory => {
            if(bookCategory?.bookid==book?.id){
                return bookCategory.categoryid;
            }
        });

        setCategory(() => {
            return categories?.filter(cate => currentBookCategory?.includes(cate?.id));
        })
        console.log(category);
        
        setRelatedBooks(() => {
            return books?.slice(0,4);
        })

        return () => {};
    }, [bookId])


    const handleChangeQuantity = (type) => {
        if(type==="increase"){
            if(book?.quantity < quantity){
                toast.warn("This book can't meet the need");
                return;
            }
            setQuantity(quantity+1);
        }
        else {
            setQuantity(quantity-1);
            if(quantity<=0){
                setQuantity(0);
            }
        }
    }
    
    const handleAddIntoCart = (e) => {
        e.preventDefault();
        if(user){
            if(quantity===0){
                toast.warn("You must add item have quantity more 1");
                return;
            }
            const newItem = {...book, quantity};
            const duplicatedItem = cart?.find(book => book?.id==newItem?.id);
            if(duplicatedItem){
                toast.warn("This product have been added into your cart");
                return;
            }
            addNewItemIntoCart(newItem);
            navigate("/cart");

        }
        else {
            toast.warn("You must login");
            navigate("/auth");
        }
    }

    return (
        <div style={{marginTop: "20vh"}}>
            <section aria-label="Main content" role="main" className="product-detail">
            <div itemscope itemtype="http://schema.org/Product">
                <meta itemprop="url" content="http://html-koder-test.myshopify.com/products/tommy-hilfiger-t-shirt-new-york"/>
                <meta itemprop="image" content="//cdn.shopify.com/s/files/1/1047/6452/products/product_grande.png?v=1446769025"/>
                <div className="shadow">
                <div className="_cont detail-top">
                    <div className="cols">
                    <div className="left-col">
                        <div className="thumbs">
                        </div>
                        <div className="big">
                        <span id="big-image" className="img" quickbeam="image" style={{backgroundImage: `url(${book?.image})`}}  ></span>
                        
                        <div className="detail-socials">
                            <div className="social-sharing" data-permalink="http://html-koder-test.myshopify.com/products/tommy-hilfiger-t-shirt-new-york">
                            <a target="_blank"  className="share-facebook" title="Share"></a>
                            <a target="_blank"  className="share-twitter" title="Tweet"></a>
                            <a target="_blank"  className="share-pinterest" title="Pin it"></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="right-col">
                        <h1 itemprop="name">{book?.title}</h1>
                        <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                        <meta itemprop="priceCurrency" content="USD"/>
                        <link itemprop="availability" href="http://schema.org/InStock"/>
                        <div className="price-shipping">
                            <div className="price" id="price-preview" quickbeam="price" quickbeam-price="800">
                                ${book?.price}
                                
                            </div>
                        </div>
                        <form id="AddToCartForm">
                            <ul>
                                <li>Author: <a href="#" onClick={() => navigate(`/books/none/${book?.author}/none`)}>{book?.author}</a></li>
                                <li>Publisher: {book?.publisher}</li>
                                <li>Supplier: {book?.supplier}</li>
                                <li>MadeBy: {book?.madeby}</li>
                                <li>Created At: {book?.created_at}</li>
                                <li>
                                    <ul>
                                        Category:
                                        {category?.map(cate => (
                                            <li><a href="#" onClick={() => navigate(`/books/${cate?.name}/none/none`)}>{cate?.name}</a></li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                            <div className="btn-and-quantity-wrap">
                            <div className="btn-and-quantity" style={{display: 'flex'}}>
                                <div id="AddToCart" quickbeam="add-to-cart" style={{marginRight: "1vh"}}>
                                    <span id="AddToCartText" style={{cursor: "pointer"}} onClick={handleAddIntoCart}>Add to Cart</span>
                                </div>
                                <div class="number-input-container">
                                    <div class="number-input-controls">
                                        <button class="number-button" onClick={() => handleChangeQuantity("increase")} type='button' id="increase">+</button>
                                        <button class="number-button" onClick={() => handleChangeQuantity("descrease")} type='button' id="decrease">-</button>
                                    </div>
                                    <input type="text" class="number-input" id="numberInput" value={quantity} disabled/>
                                </div>
                            </div>
                            </div>
                        </form>
                        <div className="tabs">
                            <div className="tab-labels">
                            <span data-id="1" className="active">Info</span>
                            </div>
                            <div className="tab-slides">
                                <div id="tab-slide-1" itemprop="description"  className="slide active">
                                    {book?.description}
                                </div>
                            </div>
                        </div>
                        <div className="social-sharing-btn-wrapper">
                            <span id="social_sharing_btn">Share</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <aside className="related">
                <div className="_cont">
                    <h2>You might also like</h2>
                    <div className="collection-list cols-4" id="collection-list" data-products-per-page="4">
                        {relatedBooks?.map(book => (
                            <>
                                <a className="product-box">
                                    <span className="img">
                                        <span style={{backgroundImage: `url(${book.image})`}} className="i first"></span>
                                        <span className="i second" style={{backgroundImage: "url('//cdn.shopify.com/s/files/1/1047/6452/products/product_030f9fc5-f253-4dca-a43a-fe2b719d0704_grande.png?v=1447530130')"}}></span>
                                    </span>
                                    <span className="text">
                                        <strong style={{width: "100vh"}} onClick={() => navigate(`/book/${book.id}`)}> <a href="#"> {book.title}</a></strong>
                                        <span>
                                            From ${book.price}
                                        </span>
                                    </span>
                                </a>
                            </>
                        ))}
                    </div>
                    <div className="more-products" id="more-products-wrap">
                    <span id="more-products" data-rows_per_page="1" onClick={() => navigate("/books/none/none")}>
                        <a href="#">More products</a>
                    </span>
                    </div>
                </div>
                </aside>
            </div>

            </section>
        </div>
    )
}