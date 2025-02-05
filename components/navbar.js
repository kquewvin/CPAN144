import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
	return (
		<>
			<nav className={styles.navbar}>
				<Link className={styles.link} href="/">
					Welcome
				</Link>
				<Link className={styles.link} href="/form">
					Form
				</Link>
				<Link className={styles.link} href="/counter">
					Counter
				</Link>
			</nav>
		</>
	);
}
