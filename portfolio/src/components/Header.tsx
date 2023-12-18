import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { useDarkMode } from "../contexts/AppThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faMoon,
  faSackXmark,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navbarItems = [
    {
      id: 1,
      name: "Blog",
      url: "https://blog.maheshjamdade.com",
      target: "_blank",
    },
    {
      id: 2,
      name: "Docs",
      url: "https://docs.maheshjamdade.com",
      target: "_blank",
    },
    {
      id: 3,
      name: "About",
      url: "#about",
      target: "_self",
    },
    {
      id: 4,
      name: "Projects",
      url: "#projects",
      target: "_self",
    },
    {
      id: 5,
      name: "Skills",
      url: "#skills",
      target: "_self",
    },
    {
      id: 6,
      name: "Lets Connect",
      url: "#letsconnect",
      target: "_self",
    },
  ];
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <Navbar
        className="px-4"
        bg={darkMode ? `dark` : "light"}
        expand="lg"
        fixed="top"
      >
        <Navbar.Toggle
          aria-controls="navbarNav"
          style={{
            color: darkMode ? `white` : "black",
            border: "1",
            borderColor: darkMode ? `white` : "black",
          }}
        />
        <Navbar.Collapse id="navbarNav">
          <FontAwesomeIcon
            onClick={toggleDarkMode}
            style={{ color: darkMode ? `white` : "black" }}
            icon={darkMode ? faMoon : faLightbulb}
          />
          <Nav className="ml-auto">
            {navbarItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={item.url}
                target={item.target}
                rel="noreferrer"
              >
                <p className={darkMode ? "text-white" : "text-black"}>
                  {item.name}
                </p>
              </Nav.Link>
            ))}
            {/* <Nav.Link href="#letsconnect">Lets Connect</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
