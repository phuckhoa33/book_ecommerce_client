import { useNavigate } from 'react-router-dom';
import '../styles/cart.scss';
import { useCartContext } from '../context/cartContext';
import { toast } from 'react-toastify';

export const Cart = () => {
    const navigate = useNavigate();
    const {cart, total, totalAfterTaxAndShipping, tax, shipping, removeItemInCart} = useCartContext();


    const handlePayment = () => {
        if(total===0){
            toast("You must add item into cart. Your cart is empty");
            return;
        }
        navigate("/payment/8/8");
    }
    return (
        <>
            <div className="wrap cf" style={{marginTop: "4vh"}}>
                <h1 className="projTitle">Responsive Table<span>-Less</span> Shopping Cart</h1>
                <div className="heading cf">
                    <h1>My Cart</h1>
                    <a href="#" className="continue" onClick={() => navigate("/books/none/none/none")}>Continue Shopping</a>
                </div>
                <div className="cart">
                    <ul className="cartWrap">
                        {cart?.map((item) => (
                            <li className="items odd">
                            
                                <div className="infoWrap"> 
                                    <div className="cartSection">
                                    <img src={item?.image} alt="" className="itemImg" />
                                    <p className="itemNumber">#{item?.id}</p>
                                    <h3>{item?.title}</h3>
                                    
                                    <p> <input type="text"  className="qty" placeholder="0" value={item?.quantity}/> x ${item?.price}</p>
                                    
                                    <p className="stockStatus"> In Stock</p>
                                    </div>  
                                
                                    
                                    <div className="prodTotal cartSection">
                                    <p>${item?.quantity*item?.price}</p>
                                    </div>
                                        <div className="cartSection removeWrap">
                                    <a href="#" className="remove" onClick={() => removeItemInCart(item?.id)}>x</a>
                                    </div>
                                </div>
                            </li>

                        ))}
                
                    </ul>
                </div>
                
                <div className="promoCode"><label for="promo">You can add discount label</label><input type="text" name="promo" placholder="Enter Code" />
                <a href="#" className="btn"></a></div>
                
                <div className="subtotal cf">
                    <ul>
                    <li className="totalRow"><span className="label">Subtotal</span><span className="value"></span>${total}</li>
                    
                        <li className="totalRow"><span className="label">Shipping</span><span className="value"></span>${shipping}</li>
                    
                            <li className="totalRow"><span className="label">Tax</span><span className="value"></span>${tax}</li>
                            <li className="totalRow final"><span className="label">Total</span><span className="value"></span>${totalAfterTaxAndShipping}</li>
                    <li className="totalRow"><a href="#" className="btn continue" onClick={handlePayment}>Checkout</a></li>
                    </ul>
                </div>
                </div>
        </>
    )
}