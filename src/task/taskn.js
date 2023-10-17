import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap"
export let Homepage1=()=>
{
    return(
        <>
        <Navbar bg="primary" expand="lg">
        <NavbarBrand href="https://www.youtube.com/watch?v=O27I_g_xqLI"/>DAS&CO<NavbarBrand/>
        <NavbarToggle aria-controls="#mynavbar"/><NavbarToggle/>
        <NavbarCollapse id="mynavbar">
        <Nav>
            <Nav.Link href="/listall1">Listall</Nav.Link>
        </Nav>
        </NavbarCollapse>
        </Navbar>
        </>
    )
}