import { useEffect, useState, useRef } from "react";
import "./App.css";
import SplashScreen from "./Components/SplashScreen";
import bgImage from "./Assets/gradient.svg";
import anime from "animejs/lib/anime.es.js";
import Card from "./Components/Card"
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
  let techStack1 = ["wehfu", "efhewfuehfuew", "efgyew"];
  let techStack2 = ["cuhw", "igygyugyu", "uihhuihui"];

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
              Coming sooon
            </div>
          )}
          {selectedMenu === "About" && (
            <div ref={divRef} className="menu-body">
              Hi this is Rohit.
            </div>
          )}
          {selectedMenu === "Work" && (
            <div ref={divRef} style = {{top :"150px",position :"absolute", display :"flex" , flexDirection:"row" , flexWrap:"wrap" ,justifyContent:"space-between"}} >
            <Card techStack = {techStack1} desc= {"rhfrh fur hfuhrufhuerhfureu rurghuhrugutrh gutrh guh tughuthgutrhguh uheuh uerug rheug hureh gurhe ughrugheru rgr hfurhurhr hhreughuerhguugtugu t t gtugh utgut thu ghut uthguthugtu"}/>
            <Card techStack = {techStack2} desc= {"rhfrh fur hfuhrufhuerhfureu rurghuhrugutrh gutrh guh tughuthgutrhguh uheuh uerug rheug hureh gurhe ughrugheru rgr hfurhurhr hhreughuerhguugtugu t t gtugh utgut thu ghut uthguthugtu"}/>
            <Card techStack = {techStack2} desc= {"rhfrh fur hfuhrufhuerhfureu rurghuhrugutrh gutrh guh tughuthgutrhguh uheuh uerug rheug hureh gurhe ughrugheru rgr hfurhurhr hhreughuerhguugtugu t t gtugh utgut thu ghut uthguthugtu"}/>
            <Card techStack = {techStack2} desc= {"rhfrh fur hfuhrufhuerhfureu rurghuhrugutrh gutrh guh tughuthgutrhguh uheuh uerug rheug hureh gurhe ughrugheru rgr hfurhurhr hhreughuerhguugtugu t t gtugh utgut thu ghut uthguthugtu"}/>
            <Card techStack = {techStack2} desc= {"rhfrh fur hfuhrufhuerhfureu rurghuhrugutrh gutrh guh tughuthgutrhguh uheuh uerug rheug hureh gurhe ughrugheru rgr hfurhurhr hhreughuerhguugtugu t t gtugh utgut thu ghut uthguthugtu"}/>
            <Card techStack = {techStack2} desc= {"rhfrh fur hfuhrufhuerhfureu rurghuhrugutrh gutrh guh tughuthgutrhguh uheuh uerug rheug hureh gurhe ughrugheru rgr hfurhurhr hhreughuerhguugtugu t t gtugh utgut thu ghut uthguthugtu"}/>
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
