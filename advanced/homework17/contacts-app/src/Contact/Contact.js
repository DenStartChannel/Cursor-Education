import React from "react";

const Contact = ({ firstName, lastName, phone, gender }) => {
	return (
		<li>
			<div>
				{firstName} {lastName}
			</div>
			<div>{phone}</div>
			<div>
				{gender === "male" ? "Ч" : gender === "female" ? "Ж" : "Не вказано"}
			</div>
		</li>
	);
};

export default Contact;
