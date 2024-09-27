"use client"

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
          <li className="inline mb-0">
            <a
              href="auth-login.html"
              className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"
            >
              <i data-feather="user" className="h-4 w-4 stroke-[3]"></i>
            </a>
          </li>
          <li className="sm:inline ps-1 mb-0 hidden">
            <a
              href="auth-signup.html"
              className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"
            >
              Signup
            </a>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu justify-end">
            <li className="has-submenu parent-menu-item">
              <a href="javascript:void(0)">Home</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="index.html" className="sub-menu-item">
                    Hero One
                  </a>
                </li>
                <li>
                  <a href="index-two.html" className="sub-menu-item">
                    Hero Two
                  </a>
                </li>
                <li>
                  <a href="index-three.html" className="sub-menu-item">
                    Hero Three
                  </a>
                </li>
                <li>
                  <a href="index-four.html" className="sub-menu-item">
                    Hero Four
                  </a>
                </li>
                <li>
                  <a href="index-five.html" className="sub-menu-item">
                    Hero Five
                  </a>
                </li>
                <li>
                  <a href="index-six.html" className="sub-menu-item">
                    Hero Six
                  </a>
                </li>
                <li>
                  <a href="index-seven.html" className="sub-menu-item">
                    Hero Seven{" "}
                    <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                      New
                    </span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/faq" className="sub-menu-item">
                FAQ
              </a>
            </li>

            <li>
              <a href="sell.html" className="sub-menu-item">
                Blog
              </a>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">About us</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Grid View </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="grid.html" className="sub-menu-item">
                        Grid Listing
                      </a>
                    </li>
                    <li>
                      <a href="grid-sidebar.html" className="sub-menu-item">
                        Grid Sidebar{" "}
                      </a>
                    </li>
                    <li>
                      <a href="grid-map.html" className="sub-menu-item">
                        Grid With Map
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> List View </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="list.html" className="sub-menu-item">
                        List Listing
                      </a>
                    </li>
                    <li>
                      <a href="list-sidebar.html" className="sub-menu-item">
                        List Sidebar{" "}
                      </a>
                    </li>
                    <li>
                      <a href="list-map.html" className="sub-menu-item">
                        List With Map
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Property Detail </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="property-detail.html" className="sub-menu-item">
                        Property Detail
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Team</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="aboutus.html" className="sub-menu-item">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="features.html" className="sub-menu-item">
                    Featues
                  </a>
                </li>
                <li>
                  <a href="pricing.html" className="sub-menu-item">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="faqs.html" className="sub-menu-item">
                    Faqs
                  </a>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Auth Pages </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="auth-login.html" className="sub-menu-item">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="auth-signup.html" className="sub-menu-item">
                        Signup
                      </a>
                    </li>
                    <li>
                      <a href="auth-re-password.html" className="sub-menu-item">
                        Reset Password
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Utility </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="terms.html" className="sub-menu-item">
                        Terms of Services
                      </a>
                    </li>
                    <li>
                      <a href="privacy.html" className="sub-menu-item">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Blog </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="blogs.html" className="sub-menu-item">
                        {" "}
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="blog-sidebar.html" className="sub-menu-item">
                        {" "}
                        Blog Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-detail.html" className="sub-menu-item">
                        {" "}
                        Blog Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Special </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="comingsoon.html" className="sub-menu-item">
                        Comingsoon
                      </a>
                    </li>
                    <li>
                      <a href="maintenance.html" className="sub-menu-item">
                        Maintenance
                      </a>
                    </li>
                    <li>
                      <a href="404.html" className="sub-menu-item">
                        404! Error
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a href="contact.html" className="sub-menu-item">
                Project
              </a>
            </li>

            <li>
              <a href="contact.html" className="sub-menu-item">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
