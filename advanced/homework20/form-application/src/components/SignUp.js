import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="auth-form">
			<h2>Sign Up</h2>
			<form>
				<input
					type="text"
					value={firstName}
					placeholder="First Name"
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<input
					type="text"
					value={lastName}
					placeholder="Last Name"
					onChange={(e) => setLastName(e.target.value)}
				/>
				<input
					type="email"
					value={email}
					placeholder="Email Address"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					value={password}
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<label>
					<input type="checkbox" />I want to receive inspiration, marketing
					promotions, and updates via email.
				</label>
				<button type="submit">Sign Up</button>
			</form>
			<Link to="/">Already have an account? Sign In</Link>
		</div>
	);
};

export default SignUp;
