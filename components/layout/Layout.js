import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";

export default function Layout({ children }) {
	return (
		<>
		
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">Blogged</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/contact">Contact</NavLink>
					<NavLink href="/login">Login</NavLink>
					<NavLink href="/admin">Admin</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>

			<div className="container">{children}</div>
		</>
	);
}
