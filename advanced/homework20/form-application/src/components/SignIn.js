import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="auth-form">
			<h2>Sign In</h2>
			<form>
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
					<input type="checkbox" />
					Remember me
				</label>
				<button type="submit">Sign In</button>
			</form>
			<Link to="/signup">Don't have an account? Sign Up</Link>
		</div>
	);
};

export default SignIn;
