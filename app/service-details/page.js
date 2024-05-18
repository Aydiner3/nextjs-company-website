"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function ServiceDetails() {
  const [activeItem, setActiveItem] = useState(1);
  const [activeTab, setActiveTab] = useState(null);
  const [activeHeader, setActiveHeader] = useState();
  const [activeContent, setActiveContent] = useState();
  const [activeContent2, setActiveContent2] = useState();
  const [activeContent3, setActiveContent3] = useState();

  const handleClick = (index) => {
    setActiveItem(index);
  };

  const handleActiveContent = (index) => {
    let content = items[index];
    setActiveHeader(content.name);
    setActiveContent(content.content1);
    setActiveContent2(content.content2);
    setActiveContent3(content.content3);
    setActiveTab(index);
  };

  const items = [
    {
      id: 1,
      name: "Terminal Güvenliği",
      content1:
        "Modern ticaretin ve lojistiğin kalbinde yer alan terminaller, güvenlik açısından kritik öneme sahiptir. Şirketimiz, terminallerdeki güvenlik ihtiyaçlarına yönelik kapsamlı çözümler sunarak operasyonel verimliliği artırmayı ve güvenliği en üst düzeyde sağlamayı hedeflemektedir. İleri teknolojiye dayalı izleme sistemlerimiz, güvenlik personelimizin profesyonel yaklaşımı ve yenilikçi güvenlik stratejilerimizle, terminallerdeki potansiyel tehditleri anında tespit edip önlem alıyoruz.",
      content2:
        "Güvenlik çözümlerimiz, sadece fiziksel güvenlikle sınırlı kalmaz. Siber güvenlik önlemlerimiz sayesinde, terminallerin dijital altyapısını koruyarak verilerinizi güvence altına alıyoruz. Güvenlik duvarları, ağ izleme sistemleri ve siber saldırı tespit mekanizmaları ile terminallerinizin dijital varlıklarını koruyoruz. Aynı zamanda, çalışanlarınızın farkındalığını artırmak için düzenli eğitimler ve simülasyonlar gerçekleştirerek, iç tehditlere karşı da etkin koruma sağlıyoruz.",
      content3:
        "Şirketimizin sunduğu terminal güvenliği hizmetleri, tüm operasyonel süreçlerinizi güvenli bir ortamda gerçekleştirebilmenizi sağlar. Terminallerinizin her noktasında uyguladığımız güvenlik çözümleri ile hem fiziksel hem de dijital tehditlere karşı tam koruma sağlıyoruz. Güvenli ve kesintisiz operasyonlar için bize güvenin; uzman ekibimiz ve gelişmiş teknolojilerimizle yanınızdayız.",
    },
    {
      id: 2,
      name: "Liman Güvenliği",
      content1:
        "Limanlar, küresel ticaretin ve lojistiğin kritik noktalarından biridir ve güvenlik açısından büyük öneme sahiptir. Şirketimiz, liman güvenliği ihtiyaçlarına yönelik kapsamlı çözümler sunarak operasyonel verimliliği artırmayı ve güvenliği en üst düzeyde sağlamayı hedeflemektedir. İleri teknolojiye dayalı izleme sistemlerimiz, profesyonel güvenlik personelimiz ve yenilikçi güvenlik stratejilerimizle, limanlardaki potansiyel tehditleri anında tespit edip önlem alıyoruz.",
      content2:
        "Güvenlik çözümlerimiz, sadece fiziksel güvenlikle sınırlı kalmaz. Siber güvenlik önlemlerimiz sayesinde, limanların dijital altyapısını koruyarak verilerinizi güvence altına alıyoruz. Güvenlik duvarları, ağ izleme sistemleri ve siber saldırı tespit mekanizmaları ile limanlarınızın dijital varlıklarını koruyoruz. Aynı zamanda, çalışanlarınızın farkındalığını artırmak için düzenli eğitimler ve simülasyonlar gerçekleştirerek, iç tehditlere karşı da etkin koruma sağlıyoruz.",
      content3:
        "Şirketimizin sunduğu liman güvenliği hizmetleri, tüm operasyonel süreçlerinizi güvenli bir ortamda gerçekleştirebilmenizi sağlar. Limanlarınızın her noktasında uyguladığımız güvenlik çözümleri ile hem fiziksel hem de dijital tehditlere karşı tam koruma sağlıyoruz. Güvenli ve kesintisiz operasyonlar için bize güvenin; uzman ekibimiz ve gelişmiş teknolojilerimizle yanınızdayız.",
    },
    {
      id: 3,
      name: "Depo Antrepo Güvenliği",
      content1:
        "Depolar ve antrepolar, işletmelerin en değerli varlıklarını barındırır ve güvenlik açısından büyük bir titizlik gerektirir. Şirketimiz, depo ve antrepolardaki güvenlik ihtiyaçlarını karşılamak için kapsamlı çözümler sunar. Yüksek teknolojiye sahip güvenlik kameraları, alarm sistemleri ve profesyonel güvenlik personelimiz ile her türlü hırsızlık, vandalizm ve izinsiz girişe karşı tam koruma sağlıyoruz.",
      content2:
        "Güvenlik çözümlerimiz sadece fiziksel tehditlere karşı değil, aynı zamanda yangın, su baskını gibi çevresel risklere karşı da etkin koruma sağlar. Yangın algılama ve söndürme sistemlerimiz, acil durum planlarımız ve düzenli tatbikatlarımız ile depo ve antrepolarınızın her koşulda güvenliğini sağlıyoruz. Ayrıca, güvenlik prosedürlerimiz ve eğitim programlarımız ile çalışanlarınızın da bu sistemlere uyumunu ve etkinliğini artırıyoruz.",
      content3:
        "Şirketimizin sunduğu depo ve antrepo güvenliği hizmetleri, işletmenizin operasyonel sürekliliğini güvence altına alır. Güvenlik sistemlerimiz ve uzman ekibimiz ile her türlü tehdide karşı hazır ve donanımlıyız. Değerli varlıklarınızın güvenliği için bize güvenin; en ileri teknolojiler ve profesyonel yaklaşımlarımızla yanınızdayız.",
    },
    {
      id: 4,
      name: "İnşaat Güvenliği",
      content1:
        "İnşaat sahaları, hem işçi güvenliği hem de malzeme ve ekipman güvenliği açısından büyük riskler barındırır. Şirketimiz, inşaat güvenliği konusunda uzmanlaşmış kadromuz ve gelişmiş teknolojik çözümlerimizle bu riskleri minimize etmeyi amaçlar. İnşaat sahalarındaki giriş-çıkış kontrolleri, çevre güvenlik çitleri ve 24/7 izleme sistemlerimiz ile inşaat alanlarınızı koruma altına alıyoruz.",
      content2:
        "İnşaat sahalarında karşılaşılan en büyük zorluklardan biri de iş kazalarıdır. Bu yüzden, güvenlik çözümlerimiz kapsamında sadece hırsızlık ve vandalizme karşı değil, aynı zamanda iş güvenliği standartlarının da en üst düzeyde uygulanmasını sağlıyoruz. İşçi güvenliği eğitimleri, koruyucu ekipman kullanımı ve düzenli saha denetimleri ile çalışanlarınızın güvenliğini sağlıyoruz.",
      content3:
        "Şirketimizin sunduğu inşaat güvenliği hizmetleri, projelerinizin zamanında ve sorunsuz bir şekilde tamamlanmasına katkı sağlar. İnşaat sahalarının her köşesinde uyguladığımız güvenlik çözümleri ile hem malzeme ve ekipmanlarınızı hem de çalışanlarınızı koruyoruz. Güvenli bir inşaat ortamı için bize güvenin; uzman ekibimiz ve yenilikçi teknolojilerimizle yanınızdayız.",
    },
    {
      id: 5,
      name: "Fabrika Güvenliği",
      content1:
        "Fabrikalar, yüksek değerli makineler, hammaddeler ve ürünlerin bulunduğu ve sürekli üretimin devam ettiği yerlerdir. Şirketimiz, fabrika güvenliği konusunda sunduğu kapsamlı çözümlerle bu alanların güvenliğini sağlar. İleri teknolojiye sahip izleme sistemleri, alarm sistemleri ve eğitimli güvenlik personelimizle fabrika alanlarınızı 7/24 koruma altına alıyoruz.",
      content2:
        "Fiziksel güvenlik çözümlerimizin yanı sıra, fabrikalarınızın dijital altyapısını da koruma altına alıyoruz. Endüstriyel kontrol sistemlerinizin siber saldırılara karşı korunması için gelişmiş güvenlik duvarları, izleme sistemleri ve siber güvenlik eğitimleri sunuyoruz. Böylece, hem fiziksel hem de dijital tehditlere karşı tam kapsamlı bir güvenlik sağlıyoruz.",
      content3:
        "Şirketimizin sunduğu fabrika güvenliği hizmetleri, üretim süreçlerinizin kesintisiz ve güvenli bir şekilde devam etmesini sağlar. Fabrika alanlarınızda uyguladığımız güvenlik çözümleri ile her türlü hırsızlık, vandalizm ve siber saldırıya karşı tam koruma sağlıyoruz. Güvenli ve verimli bir üretim ortamı için bize güvenin; uzman ekibimiz ve gelişmiş teknolojilerimizle yanınızdayız.",
    },
    {
      id: 6,
      name: "Site Güvenliği",
      content1:
        "Site güvenliği, hem bireylerin hem de toplulukların huzur ve güvenliğini sağlamak için kritik öneme sahiptir. Şirketimiz, site güvenliği konusunda sunduğu kapsamlı çözümlerle yaşam alanlarınızı koruma altına alır. Güvenlik kameraları, erişim kontrol sistemleri ve 24/7 devriye hizmetlerimiz ile sitenizdeki her noktayı güvence altına alıyoruz.",
      content2:
        "Fiziksel güvenliğin yanı sıra, site sakinlerinin güvenlik farkındalığını artırmak için düzenli bilgilendirme toplantıları ve eğitimler düzenliyoruz. Acil durum planları ve tahliye tatbikatları ile olası tehlikelere karşı hazırlıklı olmanızı sağlıyoruz. Ayrıca, site yönetimi ile sürekli iletişim halinde olarak güvenlik ihtiyaçlarınıza hızlı ve etkili çözümler sunuyoruz.",
      content3:
        "Şirketimizin sunduğu site güvenliği hizmetleri, yaşam alanlarınızın huzurunu ve güvenliğini sağlar. Gelişmiş güvenlik teknolojileri ve uzman ekibimiz ile site sakinlerinin güvenliğini en üst düzeyde koruyoruz. Güvenli ve huzurlu bir yaşam ortamı için bize güvenin; profesyonel çözümlerimizle her zaman yanınızdayız.",
    },
  ];
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Hizmetler">
        <section className="service-details-section fix section-padding">
          <div className="container">
            <div className="service-details-wrapper">
              <div className="row g-4">
                <div className="col-12 col-lg-4 order-2 order-md-1">
                  <div className="main-sidebar">
                    <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>Tüm Hizmetlerimiz</h3>
                      </div>
                      <div className="widget-categories">
                        <ul>
                          <li onClick={() => handleActiveContent(0)}>
                            Terminal güvenliği
                            <i className="fa-solid fa-arrow-right-long" />
                          </li>
                          <li onClick={() => handleActiveContent(1)}>
                            Liman Güvenliği
                            <i className="fa-solid fa-arrow-right-long" />
                          </li>
                          <li onClick={() => handleActiveContent(2)}>
                            Depo Antrepo Güvenliği
                            <i className="fa-solid fa-arrow-right-long" />
                          </li>
                          <li onClick={() => handleActiveContent(3)}>
                            İnşaat Güvenliği
                            <i className="fa-solid fa-arrow-right-long" />
                          </li>
                          <li onClick={() => handleActiveContent(4)}>
                            Fabrika Güvenliği
                            <i className="fa-solid fa-arrow-right-long" />
                          </li>
                          <li onClick={() => handleActiveContent(5)}>
                            Site Güvenliği
                            <i className="fa-solid fa-arrow-right-long" />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      className="single-sidebar-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/service/post.jpg")',
                      }}
                    >
                      <div className="contact-text">
                        <div className="icon">
                          <i className="fa-solid fa-phone" />
                        </div>
                        <h4>Yardıma Mı İhtiyacın Var ?</h4>
                        <h5>
                          <Link href="/tel:+5330919750">+5330919750</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8 order-1 order-md-2">
                  <div className="service-details-items">
                    <div className="details-image">
                      <img src="/assets/img/service/details-1.jpg" alt="img" />
                    </div>
                    <div className="details-content">
                      <h3>
                        {activeTab == null ? (
                          <span>Servislerimiz</span>
                        ) : (
                          <span>{activeHeader}</span>
                        )}
                      </h3>
                      <p className="mt-3">
                        {activeTab == null ? (
                          <span>
                            Dörtyol Star Özel Güvenlik, güvenlik sektöründe öncü
                            bir konuma sahip olan köklü bir kuruluştur.
                            Firmamız, yılların deneyimi ve uzman kadrosuyla
                            müşterilerine kapsamlı güvenlik çözümleri
                            sunmaktadır. Güvenlik alanındaki en son
                            teknolojileri takip eden ve uygulayan Dörtyol Star,
                            müşterilerinin ihtiyaçlarına uygun özelleştirilmiş
                            çözümler sunarak, her türlü riski en aza indirmeyi
                            hedeflemektedir.
                          </span>
                        ) : (
                          <span>{activeContent}</span>
                        )}
                      </p>
                      <p className="mt-3">
                        {activeTab == null ? (
                          <span>
                            Dörtyol Star Özel Güvenlik, her bir müşteri için
                            özel olarak tasarlanmış güvenlik çözümleri sunar.
                            Güvenlik danışmanlığından fiziksel güvenliğe,
                            elektronik güvenlik sistemlerinden özel etkinlik
                            güvenliğine kadar geniş bir yelpazede hizmet sunan
                            şirketimiz, müşteri memnuniyetini her zaman ön
                            planda tutar. Profesyonel ve disiplinli güvenlik
                            personeliyle Dörtyol Star, müşterilerinin güvenliği
                            ve huzuru için gece gündüz çalışmaktadır.
                          </span>
                        ) : (
                          <span>{activeContent2}</span>
                        )}
                      </p>
                      <div className="details-video-items">
                        <div className="video-thumb">
                          <img
                            src="/assets/img/service/details-video.jpeg"
                            alt="img"
                          />
                          <VideoPopup style={1} />
                        </div>
                        <div className="content">
                          <h4>Sunduğumuz hizmetlerin faydaları</h4>
                          <p> Özelleştirilmiş Çözümler:</p>
                          <ul className="list">
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Müşterilerin ihtiyaçlarına yönelik olarak <br />
                              özelleştirilmiş yazılım çözümleri sunarak iş{" "}
                              süreçlerini
                              <br /> optimize etme ve verimliliği artırma imkanı
                              sağlıyoruz.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              En son teknolojileri kullanarak müşterilerimizin
                              <br />
                              işletmelerini dijitalleştirmelerine ve rekabet
                              avantajı
                              <br /> elde etmelerine yardımcı oluyoruz.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Her bir projeyi titizlikle ele alarak
                              müşterilerimizin
                              <br /> memnuniyetini sağlamak için çaba harcıyor,
                              şeffaf <br />
                              iletişim ve işbirliğiyle güçlü bir ilişki
                              kuruyoruz.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        {activeTab == null ? (
                          <span>
                            {" "}
                            Dörtyol Star Özel Güvenlik, sadece güvenlik
                            çözümleri sunmakla kalmayıp aynı zamanda
                            müşterilerine danışmanlık hizmeti de sağlar.
                            Güvenlik ihtiyaçlarını belirlemek, riskleri analiz
                            etmek ve en etkili güvenlik stratejilerini
                            belirlemek için uzman bir danışman kadrosuna
                            sahiptir. Müşteri odaklı yaklaşımı ve kaliteli
                            hizmet anlayışıyla Dörtyol Star, güvenlik alanında
                            güvenilir bir iş ortağıdır.
                          </span>
                        ) : (
                          <span>{activeContent3}</span>
                        )}
                      </p>
                      <div className="image-area">
                        <div className="row g-4">
                          <div className="col-lg-6 col-md-6">
                            <div className="thumb">
                              <img
                                src="/assets/img/service/details-2.jpeg"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="thumb">
                              <img
                                src="/assets/img/service/details-3.jpeg"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3>Önemli Sorular</h3>
                      <p className="mt-3">
                        Şirketimiz ile tanışma sürecinde faydalı olabilecek
                        önemli sorular.
                      </p>
                    </div>
                    <div className="faq-content style-3">
                      <div className="faq-accordion">
                        <div className="accordion" id="accordion">
                          <div
                            className="accordion-item mb-3 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <h5
                              className="accordion-header"
                              onClick={() => handleClick(1)}
                            >
                              <button
                                className={
                                  activeItem == 1
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                              >
                                Güvenlik danışmanlığı nedir ve nasıl fayda
                                sağlar?
                              </button>
                            </h5>
                            <div
                              id="faq1"
                              className={
                                activeItem == 1
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordion"
                            >
                              <div className="accordion-body">
                                Güvenlik danışmanlığı, bir kurum veya kişinin
                                güvenlik ihtiyaçlarını belirlemek, riskleri
                                analiz etmek ve en etkili güvenlik
                                stratejilerini oluşturmak için profesyonel bir
                                danışmanlık hizmetidir. Güvenlik danışmanlığı,
                                kurumların güvenlik bütçesini optimize
                                etmelerine, güvenlik açıklarını tespit
                                etmelerine ve güvenlik operasyonlarını daha
                                verimli hale getirmelerine yardımcı olur. Bu
                                sayede kurumlar, daha güvenli bir çalışma ortamı
                                sağlayarak iş sürekliliğini ve müşteri
                                memnuniyetini artırabilirler.
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item mb-3 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <h5
                              className="accordion-header"
                              onClick={() => handleClick(2)}
                            >
                              <button
                                className={
                                  activeItem == 2
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                              >
                                Özel güvenlik görevlisi çalıştıran güvenlik
                                şirketleri, güvenlik personeli seçiminde hangi
                                kriterleri dikkate alır ve nasıl bir işe alım
                                süreci uygularlar?
                              </button>
                            </h5>
                            <div
                              id="faq2"
                              className={
                                activeItem == 2
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                            >
                              <div className="accordion-body">
                                Güvenlik şirketleri genellikle özel güvenlik
                                görevlisi alımı yaparken belirli kriterlere ve
                                süreçlere uyarlar. Bu süreç genellikle başvuru
                                formu doldurma, mülakat, arka plan kontrolü ve
                                belirli bir eğitim programına katılımı içerir.
                                Şirketler genellikle adaylarda iletişim
                                becerileri, fiziksel uygunluk, güvenilirlik ve
                                gerektiğinde esnek çalışma saatlerine uyum gibi
                                özellikleri ararlar. Ayrıca, adayların ilgili
                                yasal düzenlemelere uygun olarak lisans veya
                                sertifika sahibi olmaları da önemli bir kriter
                                olabilir.
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item mb-3 wow fadeInUp"
                            data-wow-delay=".7s"
                          >
                            <h5
                              className="accordion-header"
                              onClick={() => handleClick(3)}
                            >
                              <button
                                className={
                                  activeItem == 3
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                              >
                                Güvenlik şirketleri, özel güvenlik
                                görevlilerinin görevleriyle ilgili olarak hangi
                                tür eğitim programları sağlarlar?
                              </button>
                            </h5>
                            <div
                              id="faq3"
                              className={
                                activeItem == 3
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                            >
                              <div className="accordion-body">
                                Güvenlik şirketleri genellikle özel güvenlik
                                görevlilerinin görevlerini etkili bir şekilde
                                yerine getirebilmeleri için çeşitli eğitim
                                programları sunarlar. Bu eğitimler genellikle
                                güvenlik prosedürleri, kriz yönetimi, müşteri
                                ilişkileri, iletişim becerileri, fiziksel
                                müdahale teknikleri ve yasal düzenlemeleri
                                içerir. Ayrıca, özel etkinliklerde veya özel
                                koruma gerektiren durumlarda görev alacak
                                personel için ek eğitim programları da
                                düzenlenebilir. Bu eğitimler, güvenlik
                                görevlilerinin sahada karşılaşabilecekleri
                                çeşitli senaryoları ele alarak etkili bir
                                şekilde tepki vermelerini sağlar.
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item wow fadeInUp"
                            data-wow-delay=".7s"
                          >
                            <h5
                              className="accordion-header"
                              onClick={() => handleClick(4)}
                            >
                              <button
                                className={
                                  activeItem == 4
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                              >
                                Güvenlik şirketleri, özel güvenlik
                                görevlilerinin performansını nasıl
                                değerlendirirler?
                              </button>
                            </h5>
                            <div
                              id="faq4"
                              className={
                                activeItem == 4
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                            >
                              <div className="accordion-body">
                                Güvenlik şirketleri genellikle özel güvenlik
                                görevlilerinin performansını düzenli olarak
                                değerlendirirler. Bu değerlendirme genellikle
                                görev başarısı, müşteri memnuniyeti, kurum
                                politikalarına uyum, iletişim becerileri ve
                                profesyonellik gibi kriterlere dayanır.
                                Değerlendirme genellikle yöneticiler tarafından
                                yapılır ve gerektiğinde özel geri bildirimler ve
                                gelişim fırsatları sunulur. Bu süreç, güvenlik
                                görevlilerinin sürekli olarak yüksek
                                standartlarda performans göstermelerini ve
                                müşteri beklentilerini karşılamalarını sağlar.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
