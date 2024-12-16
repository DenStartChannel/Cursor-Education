import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddPostForm() {
	const [text, setText] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [selectedAuthor, setSelectedAuthor] = useState("");

	const dispatch = useDispatch();

	const fakeAuthors = [
		{ name: "Anakin Skywalker", nickname: "@dart_vader" },
		{ name: "Luke Skywalker", nickname: "@luke_skywalker" },
		// add more authors if needed
	];

	const handleAddPost = () => {
		dispatch({
			type: "ADD_POST",
			payload: {
				author: selectedAuthor.name,
				authorImage: "path_to_author_image", // set your image paths accordingly
				nickname: selectedAuthor.nickname,
				date: new Date().toLocaleDateString(),
				postText: text,
				postImage: imageUrl,
				likes: 0,
				comments: 0,
				shares: 0,
			},
		});
	};

	return (
		<div>
			<h3>Add New Post</h3>
			<input
				type="text"
				placeholder="Post text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Image URL"
				value={imageUrl}
				onChange={(e) => setImageUrl(e.target.value)}
			/>
			<select
				value={selectedAuthor}
				onChange={(e) =>
					setSelectedAuthor(fakeAuthors.find((a) => a.name === e.target.value))
				}>
				{fakeAuthors.map((author, idx) => (
					<option key={idx} value={author.name}>
						{author.name}
					</option>
				))}
			</select>
			<button onClick={handleAddPost}>Add Post</button>
		</div>
	);
}

export default AddPostForm;
