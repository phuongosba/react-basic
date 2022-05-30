import React from "react";
import './Nav.scss'
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {

        return (
            <div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/todos">Todos</NavLink>
                <NavLink to="/cources">Cources</NavLink>
            </div>
        )
    }
}

export default Nav;