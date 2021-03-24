import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavLink from "react-bootstrap/NavLink";

export default function Layout({ children }) {
	return (
		<>

		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="/contact">Contact</Nav.Link>
				<Nav.Link href="/login">Login</Nav.Link>
				<Nav.Link href="/admin">Admin</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>

			<div className="container">{children}</div>
		</>
	);
}
