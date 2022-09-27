import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../App.css";
import ChangeTheme from "./ChangeTheme";

function Header({ profile }) {
    return (
        <div className="container header justify-content-between ">
            <Nav className="justify-content-center">
                <NavLink className="navlink" to="/">
                    Products
                </NavLink>
                <NavLink className="navlink" to="/profile">
                    Profile
                </NavLink>
                <NavLink className="navlink" to="/aboutCompany">
                    About Company
                </NavLink>
            </Nav>
            <div className="d-flex align-items-center justify-content-between">
                {profile.name ? <h4>Hola {profile.name}</h4> : ""}
                <ChangeTheme />
            </div>
        </div>
    );
}

export default Header;
