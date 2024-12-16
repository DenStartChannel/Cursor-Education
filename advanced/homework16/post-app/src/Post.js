import React from "react";
import "./Post.css"; // Імпортуємо стилі для компонента

const Post = ({ author, content, image, date }) => {
	return (
		<div className="post">
			<div className="post-header">
				<img
					src={author.photo}
					alt={author.name}
					className="post-author-photo"
				/>
				<div className="post-author-info">
					<span className="post-author-name">{author.name}</span>
					<span className="post-author-nickname">{author.nickname}</span>
				</div>
			</div>
			<div className="post-content">
				<p>{content}</p>
				{image && <img src={image} alt="Post content" className="post-image" />}
			</div>
			<div className="post-date">
				<span>{date}</span>
			</div>
		</div>
	);
};

export default Post;
