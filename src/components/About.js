import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Magdy",
  lastName: "Zahran",
  bithday: "10.02.2003",
  address: "Shebin El-Kom",
  phn: "0111 4602 770",
  email: "magdyatef@semicode-eg.com",
  serviceLists: [
    "Responsive Web Development and Design",
    "React.js and Next.js Application Development",
    "Front-end User Interface (UI) Design",
    "Performance Optimization and SEO ",
    "React.js Consulting and Training.",
  ],
  skills: {
    programming: [
      { name: "HTML", value: "95" },
      { name: "CSS", value: "80" },
      { name: "JavaScript", value: "90" },
      { name: "Bootstrap", value: "95" },
      { name: "Tailwind CSS", value: "90" },
      { name: "React JS", value: "95" },
      { name: "Next JS", value: "95" },
      { name: "TypeScript", value: "95" },

    ],
    language: [
      { name: "English", value: "80" },
      // { name: "French", value: "60" },
      { name: "Arabic", value: "95" },
    ],
  },
  education: [
    { year: "2018 - 2020", unv: "high school", degree: "High school diploma" },
    {
      year: "2021 - 2024",
      unv: "Computer Science",
      degree: "Bachelor's degree",
    },
  ],
  working: [
    {
      year: "2020 - running",
      company: "Mostaql",
      deg: "Freelance",
    },
    { year: "2021 - 2023", company: "Space Team", deg: "Front End" },
    { year: "2023 - running", company: "Semi Code", deg: "React JS developer" },
  ],
  partnersLogos: ["img/partners/1.png", "img/partners/2.png"],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>Magdy Zahran.</span> I am a React.js and
                  Front-end developer, specializing in website design. With
                  expertise in HTML, CSS, JavaScript, Sass, Bootstrap, Tailwind
                  CSS, React.js, and Next.js.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
