import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import modalSlice from "./reducers/modalSlice";

export default configureStore({
	reducer: {
		cart: cartSlice,
		modal: modalSlice,
	},
});
