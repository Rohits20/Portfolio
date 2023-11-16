import React from 'react'
import { useEffect, useState, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import project1img from "../Assets/images.jpeg";

const Card = ({techStack , desc ,}) => {
  const divRef = useRef(null);
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  let chips = [
    {
      title :"Project URL",
      link : "https://stackoverflow.com/questions/66905176/how-to-redirect-to-external-url-onclick-in-react",
    },
    {
      title :"Github",
      link : "https://stackoverflow.com/questions/66905176/how-to-redirect-to-external-url-onclick-in-react",
    },
    {
      title :"Demo",
      link : "https://stackoverflow.com/questions/66905176/how-to-redirect-to-external-url-onclick-in-react",
    },
  ];
  return (
    <>
            <div ref={divRef} className="body">
              <div
                style={{
                  height: "350px",
                  width: "470px",
                  borderRadius: "20px",
                  border: "1px grey",
                  backgroundColor: "rgba(128, 128, 128, 0.15)",
                }}
              >
                <div>
                  <img
                    src={project1img}
                    style={{
                      height: "100px",
                      width: "450px",
                      marginTop: "10px",
                      marginLeft: "10px",
                      borderRadius: "20px",
                      border: "1px grey",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "450px",
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {techStack.map((item , index) => {
                    return (
                      <div
                      key = {index}
                        style={{
                          height: "22px",
                          width: "fit-content",
                          fontSize: "16px",
                          color: "white",
                          borderRadius: "16px",
                          padding: "8px",
                          backgroundColor: "rgba(128, 128, 128, 0.15)",
                          marginRight: "10px",
                          marginTop: "12px",
                        }}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
                <div
                  style={{
                    width: "430px",
                    height: "66px",
                    fontSize: "14px",
                    marginTop: "10px",
                    flexWrap: "wrap",
                    marginLeft: "10px",
                    color: "white",
                    lineHeight: "20px",
                    borderRadius: "3px",
                    backgroundColor: "rgba(128, 128, 128, 0.1)",
                    padding: "10px",
                    overflowY: "scroll",
                  }}
                >
              {desc} 
               </div>
                <div
                  style={{
                    width: "450px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: "10px",
                    marginTop: "13px",
                  }}
                >
              { chips.map((item , index) => {
               return (
                <div
                key = {index}
                onClick={()=> {openInNewTab(item?.link); console.log("jrer", index);}}
                    style={{
                      height: "fit-content",
                      width: "fit-content",
                      padding: "10px",
                      borderRadius: "30px",
                      cursor: "pointer",
                      backgroundColor: "gray",
                      fontSize: "20px",
                      border: "2px black",
                    }}
                  >
                    {item?.title}
                  </div>
               )
              })    }
                </div>
              </div>
            </div>
    </>
  )
}

export default Card