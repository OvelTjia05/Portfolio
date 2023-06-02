import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/img/my-logo.png";
import Github from "../../../assets/img/github.svg";
import navIcon2 from "../../../assets/img/nav-icon2.svg";
import navIcon3 from "../../../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col size={14} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://github.com/OvelTjia05"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="" />
              </a>
              <a
                href="https://web.facebook.com/ovel.richy"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/ovel_tjia/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
