"use client";

import { ArrowRight } from "lucide-react";
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
            src="/assets/images/logo-light.png"
            style={{height: "80px", width: "auto"}}
            className="inline-block dark:hidden w-1"
            alt=""
          />
          <img
            src="/assets/images/logo-light.png"
            style={{height: "80px", width: "auto"}}
            className="hidden dark:inline-block w-1"
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
              href="/properties"
              className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600  rounded-full"
            >
              Book Tour <ArrowRight className="h-4 w-4 stroke-[3]" style={{marginLeft: "5px"}} />
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

            <li className={isActive("/properties")}>
              <a href="/properties" className={`sub-menu-item`}>
                Properties
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
