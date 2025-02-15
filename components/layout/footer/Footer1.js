import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-widgets-wrapper footer-bg">
          <div className="shape-1">
            <img src="/assets/img/footer-shape-1.png" alt="shape-img" />
          </div>
          <div className="shape-2">
            <img src="/assets/img/footer-shape-2.png" alt="shape-img" />
          </div>
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head ">
                    <Link href="/">
                      {/* <img src="/assets/img/dx.png" alt="logo-img" /> */}
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>Modern ,yenilikçi ve güvenli.</p>
                    <div className="social-icon d-flex align-items-center">
                      <Link href="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </Link>
                      <Link href="#">
                        <i className="fa-brands fa-youtube" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Hızlı Linkler</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/about">
                        <i className="fa-solid fa-chevron-right" />
                        Hakkımızda
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        <i className="fa-solid fa-chevron-right" />
                        Servislerimiz
                      </Link>
                    </li>
                    <li>
                      <Link href="/news">
                        <i className="fa-solid fa-chevron-right" />
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <i className="fa-solid fa-chevron-right" />
                        S.S.S
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <i className="fa-solid fa-chevron-right" />
                        İletişim
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <span></span>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>İletişime Geç</h3>
                  </div>
                  <div className="footer-content">
                    <ul className="contact-info">
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        KIŞLALAR MAH. HANİFİ BOSO CADDESİ NO 2-A <br /> Dörtyol
                        / HATAY
                      </li>
                      <li>
                        <i className="fa-solid fa-phone-volume" />
                        <Link href="/tel:905330919750">+905330919750</Link>
                      </li>
                      <li>
                        <i className="fa-regular fa-envelope" />
                        <Link href="/mailto:info@dxen.com.tr">
                          info@starozelguvenlik.com
                        </Link>
                      </li>
                    </ul>
                    <Link
                      href="/contact"
                      className="theme-btn hover-white mt-4"
                    >
                      Fiyat Teklifi Al
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                © Tüm Hakları Saklıdır {new Date().getFullYear()} by{" "}
                <Link href="/">DÖRTYOL STAR ÖZEL GÜVENLİK </Link>
              </p>
              <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                <li>
                  <Link href="/contact">ŞARTLAR &amp; Condition</Link>
                </li>
                <li>
                  <Link href="/contact">GİZLİLİK POLİTİKASI</Link>
                </li>
              </ul>
            </div>
          </div>
          <Link href="#" id="scrollUp" className="scroll-icon">
            <i className="far fa-arrow-up" />
          </Link>
        </div>
      </footer>
    </>
  );
}
