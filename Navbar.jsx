
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/users">User Management</Link> | <Link to="/roles">Role Management</Link>
  </nav>
);

export default Navbar;
