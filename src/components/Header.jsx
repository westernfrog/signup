import React from "react";

export default function Header() {
  return (
    <div className="bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <div className="container-fluid text-mono">
          <a className="navbar-brand" href="/lueurtech">
            techTech
          </a>
          <button
            className="navbar-toggler border-0 pe-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ boxShadow: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/lueurtech"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/lueurtech">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/lueurtech">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/lueurtech"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contacts
                </a>
                <ul
                  className="dropdown-menu text-dm dropdown-menu-dark"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.facebook.com/LueurTech-Software-Solutions-Pvt-Ltd-108768421586960/?ref=pages_you_manage"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.lueurtech.com/"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.instagram.com/lueurtech/"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
