import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Головна</Link>
				</li>
				<li>
					<Link to="/posts">Публікації</Link>
				</li>
				<li>
					<Link to="/gallery">Фотографії</Link>
				</li>
				<li>
					<Link to="/contacts">Контакти</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
