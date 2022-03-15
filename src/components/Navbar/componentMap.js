import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="" activestyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activestyle={true}>
                        About
                    </NavLink>
                    <NavLink to="/contact" activestyle="true">
                        Contact Us
                    </NavLink>
                    <NavLink to="/Blogs" activestyle="true">
                        Blogs
                    </NavLink>
                    <NavLink to="/signup" activestyle="true">
                        Sign Up
                    </NavLink>
                    <NavLink to="/recipes" activestyle="true">
                        Recipes
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;