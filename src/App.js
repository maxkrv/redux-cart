import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "./store/reducers/cartSlice";

const App = () => {
	const dispatch = useDispatch();
	const { isOpen } = useSelector((state) => state.modal);
	const { isLoading } = useSelector((state) => state.cart);

	useEffect(() => {
		dispatch(getCartItems());
	}, []);

	if (isLoading) {
		return (
			<div className="loading">
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<main>
			{isOpen && <Modal />}
			<Navbar />
			<CartContainer />
		</main>
	);
};

export default App;
