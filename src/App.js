import { useEffect, useState, useRef } from "react";
import "./App.css";
import SplashScreen from "./Components/SplashScreen";
import bgImage from "./Assets/gradient.svg";
import anime from "animejs/lib/anime.es.js";
import Card from "./Components/Card";
import Typewriter from "typewriter-effect";
import useTypewriter from "react-typewriter-hook";
import Typed from "react-typed";
import Footer from "./Components/Footer";
import EditorImage  from "./Assets/editor.png"
import Marketplace from "./Assets/Marketplace.png"
import MLmodel from "./Assets/mlmodel.webp"
// import "codemirror/lib/codemirror.css";
// import "codemirror/theme/dracula.css";
// import "codemirror/mode/javascript/javascript";
// import "codemirror/addon/edit/closetag";
// import CircularProgress from "@mui/material/CircularProgress";
// import "codemirror/addon/edit/closebrackets";
// import Codemirror from "codemirror";
import CodeMirror from "@uiw/react-codemirror";
// import "codemirror/keymap/sublime";
// import "codemirror/theme/monokai.css";

function App() {
  const divRef = useRef(null);

  const [splash, setSplash] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [userMail, setUserMail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleMessageChange = (e) => {
    setUserMessage(e.value);
  };
  const handleEmailChange = (e) => {
    setUserMail(e.value);
  };

  const handleFormSubmit = () => {};

  useEffect(() => {}, [selectedMenu]);
  const handleSplash = () => {
    setSplash(true);
    setTimeout(function () {
      setSplash(false);
    }, 5000);
  };
  const handleClick = (item) => {
    console.log(item);
    setSelectedMenu(item);
  };
  useEffect(() => {
    const animation = anime({
      targets: divRef.current,
      translateY: -35,
      easing: "easeInOutQuad",
      duration: 200,
      autoplay: false,
    });
    animation.play();
    return () => {
      animation.play();
    };
  }, [selectedMenu]);
  let navMenu = ["Home", "About", "Work", "Resume", "Contact", "Blog"];
  let techStack1 = ["Nodejs", "Express", "Reactjs", "Mongodb"];
  let techStack2 = ["Python", "Binary classification", "Image processing"];
  let techStack3 = ["Nodejs", "Express", "Reactjs", "Mongodb"];

  let chips1 = [
    {
      title: "Project URL",
      link: "https://656990a71b7b746b3c599e38--bespoke-basbousa-14a9e3.netlify.app/",
    },
    {
      title: "Github",
      link: "https://github.com/Rohits20/Multi-user-code-editor",
    },
    {
      title: "Demo",
      link: "https://656990a71b7b746b3c599e38--bespoke-basbousa-14a9e3.netlify.app/",
    },
  ];
  let chips2 = [
    {
      title: "Project URL",
      link: "https://colab.research.google.com/drive/1OfOfdx5hWsQTNct8dadC9QXDTlypKaz4?authuser=1",
    },
    {
      title: "Github",
      link: "https://github.com/Rohits20/Insti-marketplace",
    },
    {
      title: "Demo",
      link: "https://colab.research.google.com/drive/1OfOfdx5hWsQTNct8dadC9QXDTlypKaz4?authuser=1",
    },
  ];
  let chips3 = [
    {
      title: "Project URL",
      link: "https://graceful-biscochitos-d9d3ec.netlify.app/",
    },
    {
      title: "Github",
      link: "https://github.com/Rohits20/Insti-marketplace",
    },
    {
      title: "Demo",
      link: "https://stackoverflow.com/questions/66905176/how-to-redirect-to-external-url-onclick-in-react",
    },
  ];
  const [codeOfUser, setcodeOfUser] = useState(" ");
  const editorRef = useRef(null);

  // useEffect(() => {
  //   async function init() {
  //     editorRef.current = Codemirror.fromTextArea(
  //       document.getElementById("EditorOM"),
  //       {
  //         mode: { name: "javascript", json: true },
  //         theme: "dracula",
  //         autoCloseTags: true,
  //         autoCloseBrackets: true,
  //         lineNumbers: true,
  //       },

  //       setcodeOfUser(editorRef.getValue)
  //     );
  //   }
  //   init();
  // }, []);
  return (
    <>
      {/* { splash ? 
    <SplashScreen/>
  :
  <div className="App">
  Hi I am Rohit Singh
 </div>

    } */}
      <div style={{ overflowX: "hidden" }}>
        <div
          style={{
            zIndex: "1",
            position: "fixed",
            top: "0",
            backgroundColor: "black",
            height: "100vh",
          }}
          className="full-screen-container"
        >
          <img src={bgImage} alt="bg" className="full-screen-image"></img>
        </div>
        <div
          style={{ zIndex: "2", position: "absolute", top: "0" }}
          className="navbar"
        >
          <div className="myname">
            <div style={{ whiteSpace: "nowrap" }}>{`{R0#!T $!N&#}`}</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: "9vw",
              }}
            >
              {navMenu.map((item) => {
                return (
                  <div key={item} className="singleMenu">
                    <div
                      onClick={() => {
                        handleClick(item);
                      }}
                      className={
                        item === selectedMenu ? "selectedMenu" : "menuItem"
                      }
                    >
                      {item}
                    </div>
                    {item === selectedMenu ? (
                      <div
                        style={{
                          width: "auto",
                          height: "2px",
                          backgroundColor: "pink",
                          borderRadius: "5px",
                          marginTop: "1px",
                        }}
                      ></div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
          {selectedMenu === "Home" && (
            <div ref={divRef} className="menu-body">
              <div></div>
              <div style={{ fontSize: "26px", color: "pink" }}>
                <Typed
                  strings={[
                    "I am a passionate Software Developer",
                    "I am result driven and a great team leader",
                    "I love solving complex problems",
                  ]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                />
              </div>
            </div>
          )}
          {selectedMenu === "About" && (
            <div ref={divRef} className="menu-body">
              <div>Hi this is Rohit.</div>
            </div>
          )}
          {selectedMenu === "Work" && (
            <div
              ref={divRef}
              style={{
                top: "150px",
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Card
              image = {EditorImage}
                chips={chips1}
                techStack={techStack1}
                desc={`●Built real-time online code editor where multiple users can share and run their code through room id.
                       ● Tech stacks used in this project are ReactJs, Node, Express, sockets.io, and Firebase.
                       ● Followed MVC architectural pattern for project implementation and has served 50+ users till now.
                       ● Currently users have options to switch between 5 different languages to compile the code online.
                       ● Used Firebase for Gmail authentication and database for storing the code corresponding to a room id.`}
              />
              <Card
              image ={MLmodel}
                chips={chips2}
                techStack={techStack2}
                desc={`● Developed a machine learning model to identify recyclable objects within construction debris.
                       ● Implemented a convolutional neural network through TensorFlow on Google collaboratory.
                       ● Achieved an accuracy of 92% through architecture optimization and hyperparameter tuning.`}
              />
              <Card
              image ={Marketplace}
                chips={chips3}
                techStack={techStack3}
                desc={`● Implemented a basic e-commerce website for buying and selling products for college students.
                       ● Used MERN stack and Firebase for Google sign-in and authentication.
                       ● bsdk`
                     }
              />
            </div>
          )}
          {selectedMenu === "Resume" && (
            <div ref={divRef} className="menu-body">
              <div>
                <CodeMirror
                  value={`class Rohit Singh {
··// I can, because I did.
··// My vast variety of skills is continuously expanding.
··constructor() {
····this.name = 'Rohit SIngh'
····this.dayOfBirthTimestamp = 19012000
····this.email = 'rh.rohit2020@gmail.com'
··}
··workExperience() {
····return [
······{ '2023-now' : 'Sofware developer 1 at Arthmate Tech' }
······{ '2022-2022' : 'Software developer intern at Salesbook' }
······{ '2021-2021' : 'Mobile application developer at Subspace' }
····]
··}
··education() {
····return [
······{ '2019-2023': 'IIT Madras (Bachelor of Technology in Civil Engineering)' },
······{ '2016-2018': 'MV College, Buxar' }
····]
··}
··skills() {
····return [ 'HTML/CSS/JS', 'Vue', 'Node.js', 'Redis/NATS/RabbitMQ', 'Bootstrap/Tailwind', 'Webpack/Gulp/Vite',
  'SCSS/Less', 'npm/yarn/pnpm', 'Docker/k8s', 'PWA', 'SSR', 'SPA', 'GIT/CVS', 'Cordova', 'NativeScript', 
  'Electron', 'Web-extensions', 'Web Sockets', 'Firebase', 'RWD/W3C/ARIA/WCAG', 'XSLT/Smarty/Twig',
  'PHP', 'MySQL/MongoDB/ORM', 'Wordpress', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere', 
  'Motion design', 'UX/UI', 'DTP', 'AWS', 'GCP', 'C#', 'Unity', 'TypeScript', 'NestJS', 'Cypress', 'Jest',
    'Nuxt', 'Quasar'  ]
··}
}
                  `}
                  theme ="dark"
                  maxWidth = "100%"
                  height = "70vh"
                />

                {/* <textarea id="EditorOM" key={"Hello"} /> */}
              </div>
            </div>
          )}
          {selectedMenu === "Contact" && (
            <div ref={divRef} className="menu-body">
              <div style={{ fontSize: "26px", color: "pink" }}>
                <div>Please enter your message</div>
                <textarea
                  placeholder="Hi..."
                  onChange={(event) => {
                    handleMessageChange(event);
                  }}
                  style={{
                    height: "300px",
                    width: "40%",
                    borderRadius: "20px",
                    fontSize: "22px",
                    padding: "15px",
                    fontFamily: "Sulphur Point",
                    marginTop: "10px",
                    marginBottom: "20px",
                  }}
                />
                <div>Please enter your email</div>
                <textarea
                  placeholder="For ex rh.rohit2020@gmail.com"
                  onChange={(event) => {
                    handleEmailChange(event);
                  }}
                  style={{
                    height: "30px",
                    width: "40%",
                    borderRadius: "20px",
                    fontSize: "22px",
                    padding: "15px",
                    fontFamily: "Sulphur Point",
                    marginTop: "10px",
                  }}
                />
              </div>
              <Footer/>
            </div>
          )}
          {selectedMenu === "Blog" && (
            <div ref={divRef} className="menu-body">
              <div>Coming sooon </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
