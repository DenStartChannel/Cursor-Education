import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
	const contacts = [
		{ username: "john_doe", name: "John Doe" },
		{ username: "jane_doe", name: "Jane Doe" },
	];

	return (
		<div>
			<h1>Контакти</h1>
			<ul>
				{contacts.map((contact) => (
					<li key={contact.username}>
						<Link to={`/contacts/${contact.username}`}>{contact.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Contacts;
