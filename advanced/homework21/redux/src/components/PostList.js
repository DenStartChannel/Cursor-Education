import React from "react";
import { useSelector, useDispatch } from "react-redux";

function PostList() {
	const posts = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	const handleLikeClick = (index, liked) => {
		dispatch({ type: "TOGGLE_LIKE", index, liked });
	};

	const handleCommentClick = (index, commented) => {
		dispatch({ type: "TOGGLE_COMMENT", index, commented });
	};

	const handleShareClick = (index, shared) => {
		dispatch({ type: "TOGGLE_SHARE", index, shared });
	};

	return (
		<div>
			{posts.map((post, index) => (
				<div key={index} className="post">
					<h4>
						{post.author} ({post.nickname})
					</h4>
					<p>{post.postText}</p>
					<img src={post.postImage} alt="post" />
					<div>
						<span onClick={() => handleLikeClick(index, true)}>
							👍 {post.likes}
						</span>
						<span onClick={() => handleCommentClick(index, true)}>
							💬 {post.comments}
						</span>
						<span onClick={() => handleShareClick(index, true)}>
							🔁 {post.shares}
						</span>
					</div>
				</div>
			))}
		</div>
	);
}

export default PostList;
