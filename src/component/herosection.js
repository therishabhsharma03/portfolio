export default function HeroSection(){
    return(
        <section id ="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Rishabh</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title-color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum
                        <br />lorem ispsum
                    </p>
                </div>
                <button className="btn-primary btn">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src='../imgs/Profile.png' alt="This is Profile" width={"400px"}></img>
            </div>
        </section>
    )
}