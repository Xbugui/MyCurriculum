import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Bosch from "../assets/img/Imagem4.png";
import WorldSkills from "../assets/img/Imagem5.png";
import AAM from "../assets/img/Imagem6.png";
import EEE from "../assets/img/Imagem7.png";
import EnergySteel from "../assets/img/Imagem8.png";
import Obras from "../assets/img/Imagem9.png";
import UTFPR from "../assets/img/UTFPR.png";
import Senai from "../assets/img/Senai.png";
import WS from "../assets/img/WS.png";
import Boscher from "../assets/img/Bosch.png";
import CEEP from "../assets/img/Ceep.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const career = [
    {
      title: "Bosch",
      description: "Meio Oficial",
      imgUrl: Bosch,
    },
    {
      title: "Fórmula SAE UTFPR",
      description: "Embedded Electrical and Electronic Member",
      imgUrl: EEE,
    },
    {
      title: "WorldSkills",
      description: "Mobile Robotics Competitor",
      imgUrl: WorldSkills,
    },
    {
      title: "AAM do Brasil",
      description: "Apprentice in Mechanical Maintenance",
      imgUrl: AAM,
    },
    {
      title: "EnergySteel",
      description: "Project Intern",
      imgUrl: EnergySteel,
    },
    {
      title: "Moisés Obras",
      description: "Bricklayer's Assistant",
      imgUrl: Obras,
    },
  ];

  const education = [
    {
      title: "UTFPR",
      description: "Electrical Engineering",
      imgUrl: UTFPR,
    },
    {
      title: "Senai",
      description: "Technical Degree in Mechatronics",
      imgUrl: Senai,
    },
    {
      title: "Bosch",
      description: "Technical Apprentice in Mechatronics",
      imgUrl: Boscher,
    },
    {
      title: "World Skills",
      description: "Mobile Robotics Training Word Skills",
      imgUrl: WS,
    },
    {
      title: "CEEP",
      description: "Technical Degree in Electromechanical",
      imgUrl: CEEP,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Journey</h2>
                <p>In this section, you will find an overview of my career path: the projects I brought to life, the professional experiences that strengthened my practical foundation, and the education that structured my knowledge. More than a timeline, this is my story.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">My Career</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">My Academic Background</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">My Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          career.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          education.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My Projects</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
