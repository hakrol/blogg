import Head from "../components/layout/Head";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import LoginForm from "../components/layout/LoginForm";

export default function Login() {
	return (
		<>
			<Head title="Login" />
			<Heading h1="Login" />
			<Layout>
				<LoginForm />
			</Layout>
		</>
	);
}