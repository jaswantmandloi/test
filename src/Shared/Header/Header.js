import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="headerContainer spaceX">
      <div className="logo">
        <img src="/assets/brand.svg" alt="LandKit" />
      </div>
      <div className="menus">
        <ul>
          {[
            { label: "Landing", routePath: "/" },
            { label: "Pages", routePath: "/pages" },
            { label: "Account", routePath: "/account" },
            { label: "Documentation", routePath: "/documentaion" },
          ].map(({ label, routePath }) => {
            return (
              <li key={label}>
                <Link to={routePath}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="actionButtons">
        <HambargerIcon />
        <button>Buy Now</button>
      </div>
    </header>
  );
}

export default Header;

const HambargerIcon = () => {
  return (
    <svg viewBox="0 0 100 80" width="40" height="40">
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </svg>
  );
};
