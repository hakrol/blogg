import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import { useContext } from "react";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

import AuthContext from "../../context/AuthContext";

export default function Navigation() {
    const [auth, setAuth] = useContext(AuthContext);

    const router = useRouter();

    function logout() {
        setAuth(null);
        router.push("/");
    }

    return (
        <>
            <div className="navigation__container">
                <Navbar expand="lg">
                    <Navbar.Brand href="/"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink
                                href="/"
                                className={
                                    router.pathname == "/" ? "active" : ""
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                href="/contact"
                                className={
                                    router.pathname == "/contact"
                                        ? "active"
                                        : ""
                                }
                            >
                                Contact
                            </NavLink>

                            {auth ? (
                                <>
                                    <NavLink
                                        href="/admin"
                                        className={
                                            router.pathname == "/admin"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        Admin
                                    </NavLink>
                                    <Button onClick={logout}>Logout</Button>
                                </>
                            ) : (
                                <Button href="/login">Login</Button>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}
