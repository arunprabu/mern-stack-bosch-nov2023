// Header component
import { Link } from "react-router-dom";
import MenuList from "./MenuList";

// Fn component with Named Fn
function Header() {
  // must return JSX
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Prime Video Plus App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <MenuList />
            <button type="button" className="btn btn-warning">
              Cart (0)
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
