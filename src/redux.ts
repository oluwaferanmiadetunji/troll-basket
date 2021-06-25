import { configureStore, getDefaultMiddleware, createSlice } from '@reduxjs/toolkit';

const initialState: { cart: any; products: any } = {
    cart: [{
        "id": "ba62e022-7dfc-4dbf-85e9-a23b26fe765d",
        "name": "Chivito",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "image": "https://cdn.fakercloud.com/avatars/karolkrakowiak__128.jpg",
        "price": "445.00",
        "location": "185 Joesph Walks",
        "stock": 6811,
        qty: 10
    }],
    products: []
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            return state;
        },
        setCart: (state, action) => {
            state.cart = action.payload;
            return state;
        },
        clearCart: (state, action) => {
            state.cart = [];
            return state;
        },
    },
});

const { setProducts, setCart, clearCart } = CartSlice.actions;

export { setProducts, setCart, clearCart };

const store = configureStore({
    reducer: CartSlice.reducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }),
});

export default store;
