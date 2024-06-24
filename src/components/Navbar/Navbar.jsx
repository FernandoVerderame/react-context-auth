import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary-subtle">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={'/'}>Blog</NavLink>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/'}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/posts'}>Posts</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;