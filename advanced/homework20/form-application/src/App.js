import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
