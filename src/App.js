import { useEffect, useState, useRef } from "react";
import "./App.css";
import SplashScreen from "./Components/SplashScreen";
import bgImage from "./Assets/gradient.svg";
import anime from "animejs/lib/anime.es.js";
import Card from "./Components/Card";
import Typewriter from "typewriter-effect";
import useTypewriter  from 'react-typewriter-hook';
import Typed from "react-typed"

function App() {
  const divRef = useRef(null);

  const [splash, setSplash] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Home");
  useEffect(() => {

  } ,[selectedMenu])
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
      title :"Project URL",
      link : "https://ephemeral-belekoy-7ae21a.netlify.app/",
    },
    {
      title :"Github",
      link : "https://github.com/Rohits20/Multi-user-code-editor",
    },
    {
      title :"Demo",
      link : "https://stackoverflow.com/questions/66905176/how-to-redirect-to-external-url-onclick-in-react",
    },
  ];
  let chips2 = [
    {
      title :"Project URL",
      link : "https://graceful-biscochitos-d9d3ec.netlify.app/",
    },
    {
      title :"Github",
      link : "https://github.com/Rohits20/Insti-marketplace",
    },
    {
      title :"Demo",
      link : "https://stackoverflow.com/questions/66905176/how-to-redirect-to-external-url-onclick-in-react",
    },
  ];
  let chips3 = [
    {
      title :"Project URL",
      link : "https://graceful-biscochitos-d9d3ec.netlify.app/",
    },
    {
      title :"Github",
      link : "https://github.com/Rohits20/Insti-marketplace",
    },
    {
      title :"Demo",
      link : "https://stackoverflow.com/questions/66905176/how-to-redirect-to-external-url-onclick-in-react",
    },
  ];

  return (
    <>
      {/* { splash ? 
    <SplashScreen/>
  :
  <div className="App">
  Hi I am Rohit Singh
 </div>

    } */}
      <div style={{ overflowX: "hidden"}}>
        <div
          style={{ zIndex: "1", position: "fixed", top: "0" , backgroundColor : "black" , height:"100vh"}}
          className="full-screen-container"
        >
          <img src={bgImage} alt="bg" className="full-screen-image"></img>
        </div>
        <div
          style={{ zIndex: "2", position: "absolute", top: "0" }}
          className="navbar"
        >
          <div className="myname">
            <div style={{ width: "200px" }}>{`{R0#!T $!N&#}`}</div>
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
              
            <div>
              </div>
            <div style={{fontSize : "26px" , color :"pink"}} >
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
              Hi this is Rohit.
            </div>
          )}
          {selectedMenu === "Work" && (
            <div  ref={divRef} style = {{top :"150px",position :"absolute", display :"flex" , flexDirection:"row" , flexWrap:"wrap" ,justifyContent:"space-between"}} >
            <Card chips = {chips1} techStack = {techStack1} desc= {`●Built real-time online code editor where multiple users can share and run their code through room id.
                                                  ● Tech stacks used in this project are ReactJs, Node, Express, sockets.io, and Firebase.
                                                  ● Followed MVC architectural pattern for project implementation and has served 50+ users till now.
                                                  ● Currently users have options to switch between 5 different languages to compile the code online.
                                                  ● Used Firebase for Gmail authentication and database for storing the code corresponding to a room id.`}/>
            <Card chips ={chips2} techStack = {techStack2} desc= {`● Developed a machine learning model to identify recyclable objects within construction debris.
                                                                   ● Implemented a convolutional neural network through TensorFlow on Google collaboratory.
                                                                   ● Achieved an accuracy of 92% through architecture optimization and hyperparameter tuning.`}/>
            <Card chips ={chips3} techStack = {techStack3} desc= {`● .
                                                                   ● Implemented a convolutional neural network through TensorFlow on Google collaboratory.
                                                                   ●`}/>
              </div>
          )}
          {selectedMenu === "Resume" && (
            <div ref={divRef} className="menu-body">
              Coming sooon
            </div>
          )}
          {selectedMenu === "Contact" && (
            <div ref={divRef} className="menu-body">
              Email - rh.rohit2020@gmail.com
            </div>
          )}
          {selectedMenu === "Blog" && (
            <div ref={divRef} className="menu-body">
              Comin soon
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
