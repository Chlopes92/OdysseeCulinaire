import { IProduct } from "mocks/products";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

/* Interface article dans le Panier */
export interface ICartProduct {
    id: number;
    idP: string;
    product: IProduct;
    quantity: number;
}

/* Interface panier */
interface ICart {
    products: ICartProduct[];
    addOne: (product: IProduct, quantity: number) => void;
    removeOne: (product: IProduct) => void;
    removeProduct: (product: IProduct) => void;
    getTotalProduct: () => number;
    getTotalPrice: () => number;
    resetCart: () => void;
    modify: (product: ICartProduct) => void
}

/* Initialisation d'un panier par défaut */
const defaultCart: ICart = {
    products: [],
    addOne: () => { },
    removeOne: () => { },
    removeProduct: () => { },
    getTotalProduct: () => 0,
    getTotalPrice: () => 0,
    resetCart: () => { },
    modify: () => {}
}

/* Initialisation d'un contexte */
const CartContext = createContext<ICart>(defaultCart);

/* Provider */
interface CartProviderProps {
    children: JSX.Element;
}

export const CartProvider = (props: CartProviderProps) => {
    const { children } = props;
    const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);

    // Load cart data from local storage on component mount
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCartProducts(JSON.parse(storedCart));
        }
    }, []);

    // Store cart data in local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartProducts));
    }, [cartProducts]);

    /* Function add product(s) to cart */
    const addOne = (product: IProduct, quantity: number) => {
        const newProduct = {
            id: product.id,
            idP: uuidv4(),
            product: JSON.parse(JSON.stringify(product)),
            quantity
        }
        /* check if product exist in the cart */
        const foundProduct = cartProducts.find((p) => JSON.stringify(p.product) === JSON.stringify(newProduct.product));
        console.log("found product in cart", foundProduct);
        if (!foundProduct) {
            console.log("test",[...cartProducts, newProduct])
            setCartProducts([...cartProducts, newProduct]);
        } else {
            /* add quantity */
            foundProduct.quantity += 1;
            setCartProducts([...cartProducts]);
        }
        console.log(cartProducts);
    }


    /* Function to remove quantity from a product */
    const removeOne = (product: IProduct) => {
        const foundProduct = cartProducts.find((p) => JSON.stringify(p.product) === JSON.stringify(product));
        // pour le produit customisé ?
        // const foundProductCustom = cartProducts.find((p) => p.product === product);

        if (!foundProduct) {
            return;
        } else {
            if (foundProduct.quantity > 1) {
                foundProduct.quantity -= 1;
                setCartProducts([...cartProducts]);
            }
        }
        // const index = cartProducts.indexOf(foundProduct);
    }

    const modify = (product : ICartProduct) => {
        setCartProducts(cartProducts.map((p) => {
            if(p.idP === product.idP){
                return product
            }
            return  p;
        }))
    }


    /* Function to remove a product from the cart */
    const removeProduct = (product: IProduct) => {
        const foundProduct = cartProducts.find((p) => JSON.stringify(p.product) === JSON.stringify(product));
        // pour le produit customisé ?
        // const foundProductCustom = cartProducts.find((p) => p.product === product);
        if (foundProduct) {
            const index = cartProducts.indexOf(foundProduct);
            cartProducts.splice(index, 1);
            setCartProducts([...cartProducts]);
        }
        return cartProducts;
    }

    /* Function to get the total quantity of the cart */
    const getTotalProduct = () => {
        const totalProducts = cartProducts.reduce((accumulator: number, currentValue: ICartProduct) => {
            return accumulator += currentValue.quantity;
        }, 0);
        return totalProducts;

    }

    /* Function to get the total price of the cart */
    const getTotalPrice = () => {

        const totalPrice = cartProducts.reduce((accumulator: number, currentValue: ICartProduct) => {
            return accumulator += (currentValue.product.price * currentValue.quantity);
        }, 0);
        return totalPrice;

    }

    /* Function to reset the cart */
    const resetCart = () => {
        setCartProducts([]);
        localStorage.clear();
    }


    const cart: ICart = {
        products: cartProducts,
        addOne,
        removeOne,
        removeProduct,
        getTotalProduct,
        getTotalPrice,
        resetCart,
        modify
    }

    return <CartContext.Provider value={cart}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext);