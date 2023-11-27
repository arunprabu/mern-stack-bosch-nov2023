import MenuList from "./MenuList";

// FC with anonymous fn
const Footer = function () {
  const copyrightYear = 2023;
  const developerName = 'Arun';

  // must return JSX
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>
        &copy; Copyright {copyrightYear} | {developerName}
      </p>
    </footer>
  );
};

export default Footer;
