import { createStore } from "redux";

const initialState = {
	posts: [
		{
			author: "Anakin Skywalker",
			authorImage: "path_to_anakin_image",
			nickname: "@dart_vader",
			date: "26 Feb",
			postText: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
			postImage: "path_to_rey_image",
			likes: 482,
			comments: 146,
			shares: 887,
		},
	],
};

function postReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_POST":
			return {
				...state,
				posts: [...state.posts, action.payload],
			};
		case "TOGGLE_LIKE":
			return {
				...state,
				posts: state.posts.map((post, index) =>
					index === action.index
						? { ...post, likes: post.likes + (action.liked ? 1 : -1) }
						: post
				),
			};
		case "TOGGLE_COMMENT":
			return {
				...state,
				posts: state.posts.map((post, index) =>
					index === action.index
						? { ...post, comments: post.comments + (action.commented ? 1 : -1) }
						: post
				),
			};
		case "TOGGLE_SHARE":
			return {
				...state,
				posts: state.posts.map((post, index) =>
					index === action.index
						? { ...post, shares: post.shares + (action.shared ? 1 : -1) }
						: post
				),
			};
		default:
			return state;
	}
}

const store = createStore(postReducer);
export default store;
