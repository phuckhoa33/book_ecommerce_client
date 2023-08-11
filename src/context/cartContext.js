import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalAfterTaxAndShipping, setTotalAfterTaxAndShipping] = useState(0);
    const tax = 5;
    const shipping = 4;



    useEffect(() => {
        // Lấy dữ liệu giỏ hàng từ localStorage khi trang được tải lại
        const storedCart = JSON.parse(localStorage.getItem("cart"));
        if (storedCart) {
          setCart(storedCart);
        }
      }, []);

    useEffect(() => {
        const priceTotal = cart.reduce(function(accumulator, currentItem) {
            return accumulator + (currentItem.price * currentItem.quantity);
          }, 0);
        setTotal(priceTotal);
        if(total===0){
            setTotalAfterTaxAndShipping(0);
            return () => {}
        }
        setTotalAfterTaxAndShipping(total+tax+shipping);
        localStorage.setItem("cart", JSON.stringify(cart));
        return () => {}
    }, [cart, total])


    const addNewItemIntoCart = (item) => {
        setCart([...cart, item]);
        
    }
    const removeItemInCart = (id) => {
        setCart(cart?.filter(cartItem => cartItem?.id !== id));
    }

    const resetCart = () => {
        setCart([]);
    };


    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                totalAfterTaxAndShipping,
                tax,
                shipping,
                addNewItemIntoCart,
                removeItemInCart,
                resetCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);