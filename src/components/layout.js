import React from "react"
import { Link } from "gatsby"
import SiteLogo from "../assets/img/site-logo-lime.js"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let intro

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
    intro = (
      <div className="intro-text">
        <p>
          <strong class="large">Hi </strong> <i class="far fa-smile-beam"></i>{" "}
          and thanks for visiting my <strong>new</strong> blog.
        </p>
        <p>
          My name is Martin Duggan and I am an Irish designer. I design digital
          products and platforms. I am currently based in Atlanta, Georgia
          having moved here from London, UK in 2019.
        </p>
        <p>
          This is a space where I will flesh-out ideas and share product design
          concepts.
        </p>
      </div>
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
        <Link className="md-logo-link" to="/">
          <SiteLogo />
        </Link>
      </header>
      <main className="md-page-container" id="#content">
        <article className="md-page-content">
          {intro}
          {children}
        </article>
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
