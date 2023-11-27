import { Link } from "react-router-dom";

// FC with Arrow Fn
const MenuList = () => {
  // must return JSX
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link className="nav-link active" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/prime-video">
          Prime Video
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/users">
          User Management
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/products">
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/todos">
          Todos App
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/unit-testing-demo">
          Unit Testing Demo
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about-us">
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact-us">
          Contact Us
        </Link>
      </li>
    </ul>
  );
}

export default MenuList;
