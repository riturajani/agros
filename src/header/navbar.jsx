import "./navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { _categories } from "../data/data";
export default function Navbar() {
  return (
    <div>
      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <Link class="nav-link scrollto active" to="/home#hero">
              Home
            </Link>
          </li>
          <li>
            <Link class="nav-link scrollto" to="#about">
              About
            </Link>
          </li>
          <li>
            <Link class="nav-link scrollto" to="#services">
              Services
            </Link>
          </li>
          <li>
            <Link class="nav-link scrollto " to="#portfolio">
              Products
            </Link>
          </li>
          <li>
            <Link class="nav-link scrollto" to="#call-to-action">
              Team
            </Link>
          </li>
          <li class="dropdown">
            <Link to="#">
              <span>Categories</span> <i class="bi bi-chevron-down"></i>
            </Link>
            <ul>
              <li>
                <Link to="#All">All</Link>
              </li>
              {_categories.map((i, k) => (
                <li>
                  <Link to={"#" + i.categoryName}>{i.categoryName}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link class="nav-link scrollto" to="#contact">
              Contact
            </Link>
          </li>
          <li>
            <Link class="getstarted scrollto" to="#portfolio">
              Get Started
            </Link>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}
    </div>
  );
}
