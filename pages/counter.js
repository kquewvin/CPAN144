import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Counter.module.css";

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>
			<main>
				<h1 className={styles.title}>Counter</h1>
				<p>Count: {count}</p>
				<div className={styles.container}>
					<button className={styles.submit} onClick={() => setCount(count + 1)}>
						Increment
					</button>
					<button className={styles.submit} onClick={() => setCount(count - 1)}>
						Decrement
					</button>
				</div>
			</main>
		</>
	);
}
