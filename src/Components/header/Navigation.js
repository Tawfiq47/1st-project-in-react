import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";


const Navigation = () => {
    return (
        <div>
            <Navbar className="navbar" dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Tawfiq khan</NavbarBrand>
                </div>
            </Navbar>

        </div>
    )
}

export default Navigation 