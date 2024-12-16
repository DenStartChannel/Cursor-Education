// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store"; // Import the Redux store
import AddPostForm from "./components/AddPostForm"; // Form for adding posts
import PostList from "./components/PostList"; // List of posts

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>Fake Twitter Clone</h1>
				<AddPostForm />
				<PostList />
			</div>
		</Provider>
	);
}

export default App;
