import { Link } from "react-router";

function NavBar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link> - <Link to="/admin">Admin</Link> - <Link to="/tables">Tables</Link>
        </div>
    )
}

export default NavBar;