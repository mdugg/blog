import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="md-site" data-is-root-path={isRootPath}>
      <header className="md-site-header">
        <h1 className="screen-reader-text">
          <Link to="/">{title}</Link>
        </h1>
      </header>
      <main className="md-content" id="#content">
        {children}
      </main>
      <footer className="md-site-footer">
        <ul class="md-footer-sm-links">
          <li>
            <a
              href="https://www.linkedin.com/in/martinduggan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin-in"></i> Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/duggzdesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i> @duggzdesign
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mdugg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i> Github
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Layout
