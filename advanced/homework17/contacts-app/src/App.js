import "./App.css";
import React, { useState } from "react";
import Contact from "./Contact/Contact";

const Contacts = () => {
	const [contacts, setContacts] = useState([
		{
			firstName: "Барней",
			lastName: "Стинсовський",
			phone: "+380956319521",
			gender: "male",
		},
		{
			firstName: "Робін",
			lastName: "Щербатська",
			phone: "+380931460123",
			gender: "female",
		},
		{
			firstName: "Анонімний",
			lastName: "Анонімус",
			phone: "+380666666666",
		},
		{
			firstName: "Лілія",
			lastName: "Олдровна",
			phone: "+380504691254",
			gender: "female",
		},
		{
			firstName: "Маршен",
			lastName: "Еріксонян",
			phone: "+380739432123",
			gender: "male",
		},
		{
			firstName: "Теодор",
			lastName: "Мотсбес",
			phone: "+380956319521",
			gender: "male",
		},
	]);

	const [search, setSearch] = useState("");
	const [filterGender, setFilterGender] = useState({
		male: true,
		female: true,
		unknown: true,
	});

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	const handleGenderFilterChange = (event) => {
		const { name, checked } = event.target;
		setFilterGender((prevState) => ({ ...prevState, [name]: checked }));
	};

	const filteredContacts = contacts.filter((contact) => {
		const searchQuery = search.toLowerCase();
		const isGenderValid = contact.gender
			? filterGender[contact.gender]
			: filterGender.unknown;
		return (
			isGenderValid &&
			(contact.firstName.toLowerCase().includes(searchQuery) ||
				contact.lastName.toLowerCase().includes(searchQuery) ||
				contact.phone.includes(searchQuery))
		);
	});

	return (
		<div>
			<input
				type="text"
				placeholder="Пошук..."
				value={search}
				onChange={handleSearchChange}
			/>

			<div>
				<label>
					<input
						type="checkbox"
						name="male"
						checked={filterGender.male}
						onChange={handleGenderFilterChange}
					/>
					Чоловіча
				</label>
				<label>
					<input
						type="checkbox"
						name="female"
						checked={filterGender.female}
						onChange={handleGenderFilterChange}
					/>
					Жіноча
				</label>
				<label>
					<input
						type="checkbox"
						name="unknown"
						checked={filterGender.unknown}
						onChange={handleGenderFilterChange}
					/>
					Не вказана
				</label>
			</div>

			<ul>
				{filteredContacts.map((contact, index) => (
					<Contact key={index} {...contact} />
				))}
			</ul>
		</div>
	);
};

export default Contacts;
