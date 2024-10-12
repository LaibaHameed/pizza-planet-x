import { createContext, useReducer, useMemo} from "react";

export const CartContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: action.id,
                tempId: action.tempId,
                name: action.name,
                price: action.price,
                qty: action.qty,
                size: action.priceOptions,
                img: action.img
            }];
        case "UPDATE":
            return state.map(item =>
                item.tempId === action.tempId
                    ? { ...item, qty: parseInt(item.qty) + parseInt(action.qty), price: parseInt(item.price) + parseInt(action.price) }
                    : item
            );
        case "REMOVE":
            return state.filter((_, index) => index !== action.index); // Filter out the item to remove
        case "DECREASE":
            return state.map(item => {
                if (item.tempId === action.tempId) {
                    const newQty = parseInt(item.qty) - 1;
                    return {
                        ...item,
                        qty: newQty,
                        price: newQty > 0 ? parseInt(item.price) - parseInt(action.unitPrice) : 0 // Prevent negative price
                    };
                }
                return item;
            }).filter(item => item.qty > 0); // Remove item if quantity is 0
        case "INCREASE":
            return state.map(item => {
                if (item.tempId === action.tempId) {
                    return {
                        ...item,
                        qty: parseInt(item.qty) + 1,
                        price: parseInt(item.price) + parseInt(action.unitPrice)
                    };
                }
                return item;
            });
        case "DROP":
            return [];
        default:
            return [...state];
    }
};


// 1. CartProvider state ko or dispatch sb childrens ko available kara ra hai
// 2.(a) reducer function hai jo state or dispatch ka use kr k koi action perform kare ga
// 2.(b) or array [] mai sare objects add ho gy jin py reducer ne koi action perform kia ho ga
export const CartProvider = ({ children }) => {
    // 2.
    const [state, dispatch] = useReducer(reducer, []);

    // 1.
    const contextValue = useMemo(() => {
        return { state, dispatch }
    }, [state, dispatch]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
