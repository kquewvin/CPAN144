import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

{
	/* Lets the user input text in an input field and 
  displays it to the welcome message */
}
export default function Home() {
	const [username, setUserName] = useState(""); // username starts as an empty string

	const handleInputChange = (event) => {
		setUserName(event.target.value); // the username takes the value of keyboard input
	};

	return (
		<>
			<Head>
				<title>Welcome Page</title>
			</Head>
			<main>
				{/* conditional rendering: if username field is not empty, adds username
        to the welcome message */}
				{username ? (
					<h1 className={styles.title}>Welcome, {username}!</h1>
				) : (
					<h1 className={styles.title}>Welcome</h1>
				)}
				<input
					autoFocus
					className={styles.input}
					type="text"
					value={username}
					onChange={handleInputChange}
					placeholder="Enter your name"
				/>
			</main>
		</>
	);
}
