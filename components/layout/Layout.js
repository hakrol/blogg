import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import { useContext } from "react";
import { useRouter } from 'next/router';

import AuthContext from "../../context/AuthContext";

export default function Layout({ children }) {

	const [auth, setAuth] = useContext(AuthContext);

	const router = useRouter();

	function logout() {
		setAuth(null);
		router.push("/");
	}

	return (
		<>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="/">Blogged</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<NavLink href="/">Home</NavLink>
							<NavLink href="/contact">Contact</NavLink>

							{auth ? (
								<>
								<NavLink href="/admin">Admin</NavLink>
								<button onClick={logout}>Logout</button>
								</>
							) : (
								<NavLink href="/login">Login</NavLink>
							)}
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<div className="container">{children}</div>
		</>
	);
}
