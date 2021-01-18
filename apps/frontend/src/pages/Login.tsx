import { useState } from "react";
import "./Login.scss";
import Navbar from './../components/Navbar'

export default function Login() {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [token, setToken] = useState<string>("");

	const login = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const data = {
			username: username,
			password: password
		};
		fetch("http://localhost:8080/auth/login", {
			method: 'POST', // *GET, POST, PUT, DELETE, etc
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data) // body data type must match "Content-Type" header
		})
		.then(res => res.json())
		.then(response => {
			if (response.status === 200) {
				setToken(response.token);
				return console.log("LOGGED IN")
			}
			setToken("");
			return console.log("DEATH");
		})

	}

	return (
		<>
			<Navbar />
			<form className="login" onSubmit={login}>
				<div className="line"><label>Username</label><input type="text" name="username" id="" onChange={e => setUsername(e.target.value)} /></div>
				<div className="line"><label>Password</label><input type="password" name="password" id="" onChange={e => setPassword(e.target.value)} /></div>
				<br />
				{/* {token ? username + " IS LOGGED IN" : username + " LOGGED OUT"}  */}
				<br/>
				<input type="submit" value="Submit" />
			</form>
		</>
	)
}
