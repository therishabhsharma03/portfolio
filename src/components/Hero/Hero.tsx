
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import Hello from '../../assets/Hello.gif';
import telegram from '../../assets/telegram.svg';

export function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1-second duration
  }, []);

  return (
    <Container id="home">
      <div className="hero-text">
        <p data-aos="fade-up">
          Hello <img src={Hello} alt="Hello" width="20px" />, I'm
        </p>
        <h1 data-aos="fade-up" data-aos-delay="200">
          Rishabh Sharma
        </h1>
        <h3 data-aos="fade-up" data-aos-delay="400">
          Full Stack Developer
        </h3>
        <p className="small-resume" data-aos="fade-up" data-aos-delay="600">
          {/* 4 Years of Experience */}
        </p>
        <div data-aos="fade-up" data-aos-delay="800">
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </div>
        <div className="social-media" data-aos="fade-up" data-aos-delay="1000">
          <a
            href="http://linkedin.com/in/rishabhsssharma"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="http://github.com/therishabhsharma03"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B917009246161&text=Hello+Rishabh"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp" />
          </a>

        </div>
      </div>
      <div className="hero-image" data-aos="fade-right" data-aos-delay="1000">
        <img src={Illustration} alt="Ilustração" />
      </div>
    </Container>
  );
}
