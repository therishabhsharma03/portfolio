<<<<<<< HEAD
=======
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
>>>>>>> master
import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";


export function About() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the animation duration (in ms)
      once: true, // Only animate once (on first scroll)
    });
  }, []);

  return (
    <Container id="about">
      <div className="about-text">
        <h2 data-aos="fade-left">About me</h2>
        <p data-aos="fade-left" data-aos-delay="100">
        Hey there! I’m Rishabh Sharma, a Computer Science Engineering student at Vellore Institute of Technology, and someone who’s always excited about tech and the endless possibilities it holds. I’ve been lucky to work on some pretty cool projects across different domains—from building high-performance web apps to creating machine learning models that make a real impact.

I love coding, whether it's developing React.js apps, working with Node.js, or diving into cloud technologies like AWS. My internships have been a blast! I transformed a slow WordPress site into a super-fast React-based platform during my time at Emitence Realty, and built a Task Scheduler app from scratch at Ethnus, adding features like email reminders and OTP verification for that extra bit of security.

Machine learning? I’m into that too. My project, MRI-ACLE MIND, detects Alzheimer’s disease with 94.8% accuracy, and I even got to present it at an IEEE conference at IIT Mandi. Lately, I’ve been working on an Ethereum deposit tracker to monitor live transactions and send out real-time notifications using TeleBot.


        </p>
        <p
          data-aos="fade-left"
          data-aos-delay="200"
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
         When I’m not coding, you’ll probably find me playing tennis or working on my bonsai plants. I believe in learning fast, adapting quickly, and constantly pushing myself to explore new technologies. Whether it's cloud computing, machine learning, or blockchain—I’m always ready for the next challenge!

Feel free to reach out if you want to chat about tech, collaborate on a project, or just say hi!
        </p>
        <p data-aos="fade-left" data-aos-delay="300">
          So if you're in need of a new website or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your website dreams to reality together!
        </p>
        <h3 data-aos="fade-left" data-aos-delay="400">Here are my main skills:</h3>

        <div className="hard-skills">

          <div className="hability" data-aos="fade-up" data-aos-delay="130">
            <img src={reactIcon} alt="React" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="140">
            <img src={typescriptIcon} alt="Typescript" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="160">
            <img src={nodeIcon} alt="Node" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="170">
            <img src={htmlIcon} alt="Html" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="180">
            <img src={cssIcon} alt="Css" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="190">
            <img src={boostrapIcon} alt="Bootstrap" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="190">
            <img src={jsIcon} alt="JavaScript" />
          </div>
        </div>
      </div>

      <div className="about-image" data-aos="fade-right" data-aos-delay="200">
        {/* <img src={#} alt="Rishabh Sharma" /> */}
      </div>
    </Container>
  );

}
