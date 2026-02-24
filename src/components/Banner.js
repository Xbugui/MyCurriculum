import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Banner_Eu.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  const toRotate = [
    "Electrical Engineer",
    "Software Developer",
    "Young Filmmaker",
  ];
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Lucas`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "electrical engineer", "software developer", "Young filmmaker" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I believe that good solutions arise from the combination of
                    creativity and logic. Therefore, I strive to unite strategic
                    thinking with practical execution, exploring engineering,
                    electronics, and development to create systems that solve
                    problems simply, efficiently, and intelligently. For me,
                    technology is not just code or circuits, but a tool to make
                    life easier, generate value, and open up new possibilities.
                  </p>
                  <button
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "CV Atualizado 2026.pdf"; // arquivo na pasta public
                      link.download = "CV_LucasSP.pdf";
                      link.click();
                    }}
                  >
                    Download My Curriculum <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
