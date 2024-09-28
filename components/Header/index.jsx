"use client";

export const Header = () => {
  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container relative">
        <a className="logo" href="/">
          <img
            src="assets/images/logo-dark.png"
            className="inline-block dark:hidden !w-1"
            alt=""
          />
          <img
            src="assets/images/logo-light.png"
            className="hidden dark:inline-block !w-1"
            alt=""
          />
        </a>
        <div className="menu-extras">
          <div className="menu-item">
            <a
              className="navbar-toggle"
              id="isToggle"
              onClick={() => window.toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>
        <ul className="buy-button list-none mb-0">
          <li className="sm:inline ps-1 mb-0 hidden">
            <a
              href="auth-signup.html"
              className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"
            >
              Book Tour{" "}
              <i data-feather="arrow-right" className="h-4 w-4 stroke-[3]"></i>
            </a>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu justify-end">
            <li>
              <a href="/" className="sub-menu-item">
                Home
              </a>
            </li>

            <li>
              <a href="/faq" className="sub-menu-item">
                FAQs
              </a>
            </li>

            <li>
              <a href="/blog" className="sub-menu-item">
                Blog
              </a>
            </li>

            <li>
              <a href="/about" className="sub-menu-item">
                About
              </a>
            </li>

            <li>
              <a href="/team" className="sub-menu-item">
                Team
              </a>
            </li>

            <li>
              <a href="/projects" className="sub-menu-item">
                Projects
              </a>
            </li>

            <li>
              <a href="/contact" className="sub-menu-item">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
