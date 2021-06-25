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
    },
});

const { setProducts } = CartSlice.actions;

export { setProducts };

const store = configureStore({
    reducer: CartSlice.reducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }),
});

export default store;
