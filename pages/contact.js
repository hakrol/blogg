import Link from "next/link";
import Head from "../components/layout/Head";

export default function Contact() {
	return (
		<>
			<Head title="Contact" />

			<Link href="/">
				<a>Home</a>
			</Link>
		</>
	);
}