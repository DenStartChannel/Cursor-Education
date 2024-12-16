import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";
import ContactDetail from "./components/ContactDetail";

const App = () => {
	return (
		<Router>
			<Navbar />
			<div className="app-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/posts" element={<Posts />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/contacts/:username" element={<ContactDetail />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
