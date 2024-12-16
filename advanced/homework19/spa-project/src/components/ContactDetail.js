import React from "react";
import { useParams } from "react-router-dom";

const contactsData = {
	john_doe: {
		name: "John Doe",
		gender: "Чоловік",
		phone: "+123456789",
		description: "Другий контакт в списку",
	},
	jane_doe: {
		name: "Jane Doe",
		gender: "Жінка",
		phone: "+987654321",
		description: "Контакт з другого домашнього завдання",
	},
};

const ContactDetail = () => {
	const { username } = useParams();
	const contact = contactsData[username];

	return contact ? (
		<div>
			<h1>{contact.name}</h1>
			<p>Стать: {contact.gender}</p>
			<p>Телефон: {contact.phone}</p>
			<p>Опис: {contact.description}</p>
		</div>
	) : (
		<p>Контакт не знайдено</p>
	);
};

export default ContactDetail;
