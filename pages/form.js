import { useState } from "react";
import styles from "@/styles/Form.module.css";
import Head from "next/head";

export default function ValidateForm() {
	const [input, setInput] = useState(""); // Validate input
	const [messageDisplay, setMessageDisplay] = useState(""); // Display message based on valid input

	// Handle submit to prevent default behaviour
	const handleDefault = (event) => {
		event.preventDefault();
		if (!input.trim()) {
			// if no input is true
			setMessageDisplay("Field cannot be empty");
		} else {
			setMessageDisplay(`You submitted \"${input}\"`);
			setInput("");
		}
	};

	return (
		<div>
			<Head>
				<title>Form Submission</title>
			</Head>
			<h1 className={styles.title}>Form Submission</h1>
			<form onSubmit={handleDefault}>
				<input
					type="text"
					value={input}
					onChange={(event) => setInput(event.target.value)}
					placeholder="Enter text"
				/>
				<button className={styles.submit} type="submit">
					Submit
				</button>
			</form>
			{/* conditional rendering 
      if messageDisplay is true, the expression after && will render*/}
			{messageDisplay && <p className={styles.message}>{messageDisplay}</p>}
		</div>
	);
}
