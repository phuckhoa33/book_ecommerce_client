import { useNavigate } from 'react-router-dom';
import '../styles/cart.scss';
import { useCartContext } from '../context/cartContext';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useBookContext } from '../context/bookContext';
import { Spinner } from 'react-bootstrap';

export const Cart = () => {
    const navigate = useNavigate();
    const {cart, total, setOrderCart, totalAfterTaxAndShipping, tax, shipping, removeItemInCart, addDiscoutLabelsAndCalculateTotal, setDiscountLabel, discountLabel } = useCartContext();
    const {intervalDiscount} = useBookContext();
    const {books} = useBookContext();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [discountAddedLabels, setDiscountAddedLabels] = useState([]);
    const [discountSearch, setDiscountSearch] = useState('');
    const handlePayment = () => {
        if(total===0){
            toast("You must add item into cart. Your cart is empty");
            return;
        }
        setOrderCart(true);
        navigate("/payment/8/8");
    };

    useEffect(() => {
        setDiscountSearch(intervalDiscount)
    }, [])



    const handleRemove = async(id) => {
        const book = books?.find(book => book?.id === id);
        setLoading(true)
        await removeItemInCart(id, book?.quantity);
        setLoading(false);
    };

    const handleChangeDiscountCode = (e) => {
        setOpen(true);
        setDiscountSearch(intervalDiscount?.filter(discount => discount?.title?.toLowerCase().startsWith(e.target.value.toLowerCase())));
        
    }


    const handleCheckedDiscountLabel = e => {
        const checked = e.target.checked;
        if(checked){
            if(discountLabel?.includes(e.target.value)){
                return;
            }
            setDiscountLabel([...discountLabel, e.target.value]);
        }
        else {
            setDiscountLabel(discountLabel?.filter(discount =>  discount.id!==e.target.value));
        }
    }

    const handleAddDiscountLabels = () => {
        setDiscountAddedLabels(addDiscoutLabelsAndCalculateTotal(discountLabel, intervalDiscount));
        setOpen1(true);
        setOpen(false);
        setDiscountSearch('');
    }

    return (
        <>
            <div className="wrap cf" style={{marginTop: "4vh"}}>
                <h1 className="projTitle">Responsive Table<span>-Less</span> Shopping Cart</h1>
                <div className="heading cf">
                    <h1>My Cart</h1>
                    <a href="#" className="continue" onClick={() => navigate("/books/none/none/none")}>{loading ? <Spinner/> : "Continue Shopping"}</a>
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
                                    
                                    <p> <input type="text"  className="qty" placeholder="0" value={item?.quantity}/>x ${item?.price}</p>
                                    
                                    <p className="stockStatus"> In Stock</p>
                                    </div>  
                                
                                    
                                    <div className="prodTotal cartSection">
                                    <p>${item?.quantity*item?.price}</p>
                                    </div>
                                        <div className="cartSection removeWrap">
                                    <a href="#" className="remove" onClick={() => handleRemove(item?.id)}>X</a>
                                    </div>
                                </div>
                            </li>
                            
                        ))}
                
                    </ul>
                </div>
                <div className="promoCode">
                    <label for="promo">You can add discount label</label>
                    <input onChange={handleChangeDiscountCode} type="text" name="promo" placholder="Enter Code" />
                    <a href="#" className="btn" onClick={handleAddDiscountLabels}></a>
                    {open && (
                        <div>
                            {discountSearch?.map(discount => (
                                <div>
                                    <input type='checkbox' value={discount?.id} onChange={handleCheckedDiscountLabel}/>
                                    <img width={80} src="https://e7.pngegg.com/pngimages/524/289/png-clipart-red-and-white-special-discount-icon-special-discount-sign-miscellaneous-discount-signs.png" alt="" />
                                    {discount.title}
                                    <h6>{discount.start_date}</h6>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
                <div className="subtotal cf">
                    <ul>
                    <li className="totalRow"><span className="label">Subtotal</span><span className="value"></span>${total}</li>
                    
                        <li className="totalRow"><span className="label">Shipping</span><span className="value"></span>${shipping}</li>
                        {open1 && (
                            <li className="totalRow"><span className="label">Discount Labels</span><span className="value"></span>
                                    <ul>
                                        {discountAddedLabels?.map(discountAddLabel => (
                                            <li>- ${discountAddLabel}</li>
                                        ))}

                                    </ul>
                            </li>

                        )}
                            <li className="totalRow"><span className="label">Tax</span><span className="value"></span>${tax}</li>
                            <li className="totalRow final"><span className="label">Total</span><span className="value"></span>${totalAfterTaxAndShipping}</li>
                    <li className="totalRow"><a href="#" className="btn continue" onClick={handlePayment}>Checkout</a></li>
                    </ul>
                </div>
                </div>
        </>
    )
}