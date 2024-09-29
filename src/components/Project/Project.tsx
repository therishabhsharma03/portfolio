
import { useEffect } from "react";
import { Container } from "./styles";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";

export function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);


  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">


        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/therishabhsharma03/S3ver" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>

            </div>
          </header>
          <div className="body">
            <h3>S3VER</h3>
            <p>
            S3ver is an innovative deployment service that streamlines the process of deploying web applications from GitHub repositories to Amazon S3. It offers developers a seamless workflow for quick deployment and hosting of React projects.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>AWS S3</li>
              <li>AWS SQS</li>
              <li>TypeScript</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/therishabhsharma03/Ethereum-Deposit-Tracker" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>

            </div>
          </header>
          <div className="body">
            <h3>Ethereum Deposit Tracker</h3>
            <p>
            The Ethereum Deposit Tracker is a tool designed to monitor ETH deposits to the Beacon Deposit Contract on the Ethereum blockchain. It provides real-time tracking of deposit events, metrics collection via Prometheus, visualization through Grafana, and notifications through Telegram.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Grafana</li>
              <li>Prometheus</li>
              <li>Node.js</li>
              <li>Telegram API</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Crop-hecy</h3>
            <p>
            Crophecy Front is a React-based web application designed to predict the most suitable crop based on seven critical parameters. The project features a multilingual interface, implemented using the React i18n module, ensuring accessibility for users in multiple languages.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>ReactJs</li>
              <li>NodeJs</li>
              <li>Flask</li>
            </ul>
          </footer>
        </div>

        {/* Add more projects following the same pattern */}
        
      </div>
    </Container>
  );
}

