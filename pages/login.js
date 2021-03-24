import Link from "next/link";
import Head from "../components/layout/Head";

export default function Login() {
	return (
		<>
			<Head title="Login" />

			<Link href="/">
				<a>Home</a>
			</Link>
		</>
	);
}