import React, { useState } from "react";
import './Register.scss';
import Navbar from './../components/Navbar';



export default function Login() {
	const [username, setUsername] = useState<string>("");
	const [password0, setPassword0] = useState<string>("");
	const [password1, setPassword1] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const register = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		if (username.length < 4) {
			return setMessage("Username must have at least 4 characters")
		}
		if (password0 !== password1) {
			return setMessage("Passwords must match!")
		}
		if (password0.length < 6) {
			return setMessage("Password length must be over 6 characters")
		}


		const data = {
			username: username,
			password: password0
		};
		fetch("http://localhost:8080/auth/register", {
			method: 'POST', // *GET, POST, PUT, DELETE, etc
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data) // body data type must match "Content-Type" header
		})
			.then(res => res.json())
			.then(response => {
				if (response.status !== 200) {
					return setMessage("SERVER ERROR");
				}
				return setMessage("User created!")
			})
		return setMessage("New user created!")


	}

	return (
		<>
			<Navbar />
			<div className="register">
				<form onSubmit={register}>
					<div className="line"><label>Username</label><input type="text" name="username" id="" onChange={e => setUsername(e.target.value)} /></div>
					<div className="line"><label>Password</label><input type="password" name="password" id="" onChange={e => setPassword0(e.target.value)} /></div>
					<div className="line"><label>Confirm Password</label><input type="password" name="password" id="" onChange={e => setPassword1(e.target.value)} /></div>
					{message}
						<br />
					<input type="submit" value="Submit" />
				</form>
			</div>
		</>
	)
}
