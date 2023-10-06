import "bootstrap/dist/css/bootstrap.min.css"
import{Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from "react-bootstrap"
export let Homepage=()=>
{
    return(
        <>
        <Navbar bg="primary" expand="lg">
        <NavbarBrand href="https://www.youtube.com/watch?v=Po3jStA673E"/>leo<NavbarBrand/>
        <NavbarToggle aria-controls="#mynavbar"/><NavbarToggle/>
        <NavbarCollapse id="mynavbar">
        <Nav>
            <Nav.Link href="/ternary1">ternaryoperators</Nav.Link>
            <Nav.Link href="/usestate1">useState</Nav.Link>
        </Nav>
        </NavbarCollapse>
        </Navbar>
        </>
    )
}