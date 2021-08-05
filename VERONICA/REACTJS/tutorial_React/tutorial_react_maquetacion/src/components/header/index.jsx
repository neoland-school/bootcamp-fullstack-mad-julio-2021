import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container-div">
          <img
            className="logo"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt="logo-react"
          />
          <a id="link" href="https://reactjs.org/">
            <span class="color-react">React</span>
          </a>
        </div>
        <ul className="nav-item">
          <li>
            <Link to="/home" id="link">
              Home
            </Link>
          </li>
          <li>
            <a
              id="link"
              href="https://es.reactjs.org/docs/getting-started.html"
            >
              Documentación
            </a>
          </li>
          <li>
            <a id="link" href="https://es.reactjs.org/tutorial/tutorial.html">
              Tutorial
            </a>
          </li>
          <li>
            <a id="link" href="https://es.reactjs.org/blog/">
              Blog
            </a>
          </li>
          <li>
            <a id="link" href="https://es.reactjs.org/community/support.html">
              Comunidad
            </a>
          </li>
          <li>
            <Link to="/contact" id="link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
