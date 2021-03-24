import Link from "next/link";
import Head from "../components/layout/Head";

export default function Admin() {
	return (
		<>
			<Head title="Admin" />

			<Link href="/">
				<a>Home</a>
			</Link>
		</>
	);
}

