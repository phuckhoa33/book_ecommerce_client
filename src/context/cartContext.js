import { createContext, useContext, useEffect, useState } from "react";
import { updateQuantity } from "../store/store";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalAfterTaxAndShipping, setTotalAfterTaxAndShipping] = useState(0);
    const [discountLabel, setDiscountLabel] = useState([]);
    const tax = 5;
    const shipping = 4;



    useEffect(() => {
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
        const discountValue = 0;
        for(let i = 0; i < discountLabel; i++){
            const removedValue = total*discountLabel[i]/100;
            discountValue += removedValue;
        }
        setTotalAfterTaxAndShipping(total+tax+shipping-discountValue);
        localStorage.setItem("cart", JSON.stringify(cart));
        return () => {}
    }, [cart, total, discountLabel]);


    const addNewItemIntoCart = async(item, initialQuantity) => {
        setCart([...cart, item]);
        const {data} = await updateQuantity({quantity: initialQuantity-item?.quantity, bookid: item?.id});
        if(data.data !== "Update quantity is successfully"){
            toast.error("Sorry, We have some error, We will restore after");
            return false;
        }
        return true;
    }
    const removeItemInCart = async(id, bookQuantity) => {
        const removedItem = cart?.find(cartItem => cartItem?.id === id)
        setCart(cart?.filter(cartItem => cartItem?.id !== id));
        const {data} = await updateQuantity({quantity: bookQuantity+removedItem.quantity, bookid: removedItem?.id});
        if(data.data !== "Update quantity is successfully"){
            toast.error("Sorry, We have some error, We will restore after");
        }
    };

    const resetCart = async(books) => {
        let processes = [];
        for(let i = 0; i < cart.length; i++){
            const findedBook = books.find(book => book.id === cart[0].id);
            const addRemoveCartProcess = await updateQuantity({quantity: findedBook.quantity+cart[i].quantity, bookid: findedBook.id});
            processes.push(addRemoveCartProcess);
        }

        Promise.all(processes);

        localStorage.removeItem("cart");
        setCart([]);
    };

    const addDiscoutLabelsAndCalculateTotal = (discountLabelElements, discounts) => {
        let removedValues = [];
        for(let i = 0; i < discountLabelElements.length; i++){
            console.log(discountLabelElements);
            const discountLabelElement = discounts?.find(discount => discount?.id==discountLabelElements[i]);
            const substractedValue = totalAfterTaxAndShipping*(discountLabelElement?.percent)/100;
            removedValues.push(substractedValue);
            setTotalAfterTaxAndShipping(Math.round(totalAfterTaxAndShipping - substractedValue));
        }

        return removedValues;
    }



    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                totalAfterTaxAndShipping,
                tax,
                shipping,
                discountLabel,
                addNewItemIntoCart,
                removeItemInCart,
                resetCart,
                addDiscoutLabelsAndCalculateTotal,
                setDiscountLabel
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);