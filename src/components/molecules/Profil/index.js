import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import Meanno from "../../../assets/img/meanno-web.png";
import WUV from "../../../assets/img/wuv.png";
import SepatuWeb from "../../../assets/img/sepatu-web.jpeg";
import LVMusicVideo from "../../../assets/img/lvmusicvideo.png";
import Gccf1 from "../../../assets/img/gccf1.png";
import Gccf2 from "../../../assets/img/gccf2.png";
import Gccf3 from "../../../assets/img/gccf3.png";
import Gccf4 from "../../../assets/img/gccf4.png";
import Gccf5 from "../../../assets/img/gccf5.png";
import Gccf6 from "../../../assets/img/gccf6.png";
import Gccf7 from "../../../assets/img/gccf7.png";
import Gccf8 from "../../../assets/img/gccf8.png";
import HackerRank from "../../../assets/img/hackerRank.png";
import colorSharp2 from "../../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Profil = () => {
  const projects = [
    {
      title: "Meanno",
      description:
        "Website untuk belanja online mirip seperti Shopee, Tokopedia, Lazada, dsb. Ini merupakan proyek web pertama saya bersama kelompok dan saya yang bertugas desain sampai slicing tampilannya.",
      imgUrl: Meanno,
      url: "https://github.com/OvelTjia/Meanno",
    },
    {
      title: "WUV (Wash Ur Vehicle)",
      description:
        "Aplikasi mobile untuk menyewa jasa cuci kendaraan agar pelanggan tidak perlu menunggu di tempat, hanya perlu bawa kendaraan ke lokasi lalu proses transaksi di smartphone. saya bertugas sebagai front-end di proyek ini.",
      imgUrl: WUV,
      url: "https://github.com/OvelTjia05/WUV-mobile-app",
    },
    {
      title: "Shoes Classification WEB",
      description:
        "Web app untuk mengklasifikasi sepatu Nike, Adidas, dan Converse menggunakan AI yang sudah dilatih untuk membedakan 3 sepatu tersebut. Saya bertugas membuat data model dan web app.",
      imgUrl: SepatuWeb,
      url: "https://github.com/OvelTjia05/AIProject-Group10",
    },
    {
      title: "LV Music Video",
      description:
        "Web app untuk library lagu dan video yang terintegrasi dengan 2 API, lagunya bisa direview dengan mendengarkannya selama 30detik. Saya bertugas membuat web app musiknya.",
      imgUrl: LVMusicVideo,
      url: "https://github.com/OvelTjia05/AIProject-Group10",
    },
  ];

  return (
    <section className="profil" id="profil">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Profil</h2>
                  <p>
                    Saya adalah orang yang suka menikmati waktu sendiri dan
                    melakukan berbagai aktifitas yang saya sukai seperti
                    memasak, mendengar musik, menonton film, dan menikmati alam.
                  </p>
                  <Tab.Container id="profils-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Certificate</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <div className="listCerti">
                            <a
                              href="https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3654407"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Gccf1} alt="gccf1" />
                            </a>
                            <a
                              href="https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3653873"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Gccf2} alt="gccf2" />
                            </a>
                            <a
                              href="https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3409162"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Gccf3} alt="gccf3" />
                            </a>
                            <a
                              href="https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3408514"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Gccf4} alt="gccf4" />
                            </a>
                            <a
                              href="https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3401735"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Gccf5} alt="gccf5" />
                            </a>
                            <a
                              href="https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3268646"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Gccf6} alt="gccf6" />
                            </a>
                            <a
                              href="https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3265400"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Gccf7} alt="gccf7" />
                            </a>
                            <a
                              href="https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3227839"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Gccf8} alt="gccf8" />
                            </a>
                            <a
                              href="https://www.hackerrank.com/certificates/786921d0e305"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={HackerRank} alt="hackerRank" />
                            </a>
                          </div>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="tabel">
                          <div className="list1">
                            <p>SD Negeri Inpres Maen di Wineru</p>
                            <p>:</p>
                            <p>2007 - 2013</p>
                          </div>
                          <div className="list1">
                            <p>SMP Advent Getsemani di Wineru</p>
                            <p>:</p>
                            <p>2013 - 2016</p>
                          </div>
                          <div className="list1">
                            <p>SMK Negeri 5 di Manado (Jurusan TKJ)</p>
                            <p>:</p>
                            <p>2016 - 2019</p>
                          </div>
                          <div className="list1">
                            <p>Universitas Klabat (Jurusan Informatika)</p>
                            <p>:</p>
                            <p>2020 - Present</p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="background-right"
        src={colorSharp2}
      ></img>
    </section>
  );
};
