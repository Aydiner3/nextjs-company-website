import Link from "next/link";
import Menu from "../Menu";
import OnePageNav from "../OnePageNav";

export default function Header1({
  scroll,
  isOffCanvas,
  handleOffCanvas,
  isSearch,
  handleSearch,
  onePageNav,
}) {
  return (
    <>
      <header>
        <div className="header-top-section fix">
          <div className="container-fluid">
            <div className="header-top-wrapper">
              <ul className="contact-list">
                <li>
                  <i className="far fa-envelope" />
                  <Link href="/mailto:info@dxen.com.tr" className="link">
                    info@starozelguvenlik.com
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-phone-volume" />
                  <Link href="/tel:+905546162557">+905330919750</Link>
                </li>
              </ul>
              <div className="top-right">
                <div className="social-icon d-flex align-items-center">
                  <span>Sosyal Medya :</span>
                  <Link
                    href="https://www.facebook.com/dortyolstarozelguvenlik/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/ahmet-ayd%C4%B1n-er-a4aa031b3/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=tr"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/dortyolstarozelguvenlik/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="header-sticky"
          className={`header-1 ${scroll ? "sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main style-2">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <img
                        src="/assets/img/dx.png
                        "
                        alt="logo-img"
                        width={"100px"}
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        {onePageNav ? <OnePageNav /> : <Menu />}
                      </nav>
                    </div>
                  </div>
                  <a
                    onClick={handleSearch}
                    className="search-trigger search-icon"
                  >
                    <i className="fal fa-search" />
                  </a>
                  <div className="header-button">
                    <Link href="/contact" className="theme-btn">
                      <span>
                        Fiyat Teklifi Al
                        <i className="fa-solid fa-arrow-right-long" />
                      </span>
                    </Link>
                  </div>
                  <div className="header__hamburger d-xl-block my-auto">
                    <div className="sidebar__toggle" onClick={handleOffCanvas}>
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
