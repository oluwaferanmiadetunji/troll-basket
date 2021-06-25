import { configureStore, getDefaultMiddleware, createSlice } from '@reduxjs/toolkit';

const initialState: { cart: any; products: any } = {
    cart: [],
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
