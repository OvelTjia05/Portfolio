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
import colorSharp from "../../../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn border border-white">
              <h2>Skills</h2>
              <p>Beberapa hal yang saya kuasai</p>

              <div className="list flex-wrap">
                <div className="item ">
                  <h5>Network Engineer</h5>
                  <div className="list1">
                    <img src={Cisco} alt="cisco" />
                    <p>Cisco Packet Tracer</p>
                  </div>
                  <div className="list1">
                    <img src={WireShark} alt="wireshark" />
                    <p>Wireshark</p>
                  </div>
                  <div className="list1">
                    <img src={Putty} alt="putty" />
                    <p>PuTTY</p>
                  </div>
                  <div className="list1">
                    <img src={VirtualBox} alt="virtualbox" />
                    <p>Oracle Virtualbox</p>
                  </div>
                </div>
                <div className="item">
                  <h5>Front-End</h5>
                  <div className="list1">
                    <img src={Javascript} alt="javascript" />
                    <p>Javascript</p>
                  </div>
                  <div className="list1">
                    <img src={HTML} alt="html" />
                    <p>HTML</p>
                  </div>
                  <div className="list1">
                    <img src={CSS} alt="css" />
                    <p>CSS</p>
                  </div>
                  <div className="list1">
                    <img src={ReactJS} alt="reactjs" />
                    <p>ReactJS</p>
                  </div>
                  <div className="list1">
                    <img src={ReactJS} alt="react-native" />
                    <p>React Native</p>
                  </div>
                </div>
                <div className="item">
                  <h5>Back-End</h5>
                  <div className="list1">
                    <img src={MySQL} alt="mysql" />
                    <p>MySQL</p>
                  </div>
                  <div className="list1">
                    <img src={NodeJS} alt="nodejs" />
                    <p>Node JS</p>
                  </div>
                  <div className="list1">
                    <img src={Express} alt="express" />
                    <p>Express</p>
                  </div>
                  <div className="list1">
                    <img src={MongoDB} alt="mongodb" />
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
