import { Container } from "react-bootstrap";
import Gccf1 from "../../../assets/img/gccf1.png";
import Gccf2 from "../../../assets/img/gccf2.png";
import Gccf3 from "../../../assets/img/gccf3.png";
import Gccf4 from "../../../assets/img/gccf4.png";
import Gccf5 from "../../../assets/img/gccf5.png";
import Gccf6 from "../../../assets/img/gccf6.png";
import Gccf7 from "../../../assets/img/gccf7.png";
import Gccf8 from "../../../assets/img/gccf8.png";
import HackerRank from "../../../assets/img/hackerRank.png";

export const Achievement = () => {
  return (
    <section className="achievement" id="achievements">
      <div className="container">
        <div className="subContainer">
          <h2>Achievements</h2>
          <p>Hal-hal yang telah saya capai</p>
          <div className="list">
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
        </div>
      </div>
    </section>
  );
};
