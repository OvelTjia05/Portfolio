import Cisco from "../../../assets/img/cisco.png";
import Putty from "../../../assets/img/puTTY_Icon.svg";
import WireShark from "../../../assets/img/wireshark.webp";
import VirtualBox from "../../../assets/img/virtualbox_logo.png";
import HTML from "../../../assets/img/html.png";
import Javascript from "../../../assets/img/javascript.png";
import CSS from "../../../assets/img/css.png";
import ReactJS from "../../../assets/img/reactjs.png";
import MySQL from "../../../assets/img/mySQL.png";
import NodeJS from "../../../assets/img/nodejs.png";
import Express from "../../../assets/img/express.png";
import MongoDB from "../../../assets/img/mongodb.png";

import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Ini adalah beberapa hal yang saya kuasai</p>

              <div className="list">
                <div className="item">
                  <h5>Network Engineer</h5>
                  <div className="list1">
                    <img src={Cisco} alt="meter1" />
                    <p>Cisco Packet Tracer</p>
                  </div>
                  <div className="list1">
                    <img src={WireShark} alt="meter1" />
                    <p>Wireshark</p>
                  </div>
                  <div className="list1">
                    <img src={Putty} alt="meter1" />
                    <p>PuTTY</p>
                  </div>
                  <div className="list1">
                    <img src={VirtualBox} alt="meter1" />
                    <p>Oracle Virtualbox</p>
                  </div>
                </div>
                <div className="item">
                  <h5>Front-End</h5>
                  <div className="list1">
                    <img src={Javascript} alt="meter1" />
                    <p>Javascript</p>
                  </div>
                  <div className="list1">
                    <img src={HTML} alt="meter1" />
                    <p>HTML</p>
                  </div>
                  <div className="list1">
                    <img src={CSS} alt="meter1" />
                    <p>CSS</p>
                  </div>
                  <div className="list1">
                    <img src={ReactJS} alt="meter1" />
                    <p>ReactJS</p>
                  </div>
                  <div className="list1">
                    <img src={ReactJS} alt="meter1" />
                    <p>React Native</p>
                  </div>
                </div>
                <div className="item">
                  <h5>Back-End</h5>
                  <div className="list1">
                    <img src={MySQL} alt="meter1" />
                    <p>MySQL</p>
                  </div>
                  <div className="list1">
                    <img src={NodeJS} alt="meter1" />
                    <p>Node JS</p>
                  </div>
                  <div className="list1">
                    <img src={Express} alt="meter1" />
                    <p>Express</p>
                  </div>
                  <div className="list1">
                    <img src={MongoDB} alt="meter1" />
                    <p>MongoDB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="leftBackground"
      />
    </section>
  );
};
