"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const Header = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path ? "active" : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("topnav");
      if (navbar) {
        if (window.scrollY >= 50) {
          navbar.classList.add("nav-sticky");
        } else {
          navbar.classList.remove("nav-sticky");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container px-7 relative">
        <a className="logo" href="/">
          <img
            src="assets/images/junab-logo.png"
            className="inline-block dark:hidden w-1"
            width={170}
            alt=""
          />
          <img
            src="assets/images/junab-logo.png"
            className="hidden dark:inline-block w-1"
            width={170}
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
          <li className="inline mb-0">
            <a
              href="/book"
              className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600  rounded-full"
            >
              Book Tour{" "}
              <i data-feather="arrow-right" className="h-4 w-4 stroke-[3]"></i>
            </a>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu justify-end nav-light">
            <li className={isActive("/")}>
              <a href="/" className="sub-menu-item ">
                Home
              </a>
            </li>

            <li className={isActive("/about")}>
              <a href="/about" className={`sub-menu-item`}>
                About Us
              </a>
            </li>

            <li className={isActive("/projects")}>
              <a href="/projects" className={`sub-menu-item`}>
                Projects
              </a>
            </li>

            <li className={isActive("/faq")}>
              <a href="/faq" className={`sub-menu-item `}>
                FAQs
              </a>
            </li>

            <li className={isActive("/blog")}>
              <a href="/blog" className={`sub-menu-item `}>
                Blog
              </a>
            </li>

            <li className={isActive("/contact")}>
              <a href="/contact" className={`sub-menu-item `}>
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
