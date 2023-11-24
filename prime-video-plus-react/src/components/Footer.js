import MenuList from "./MenuList";

// FC with anonymous fn
const Footer = function () {
  // must return JSX
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>&copy; Copyright 2023 | Arun</p>
    </footer>
  );
};

export default Footer;
