import React, { useState, useEffect } from 'react';

const SplashScreen = () => {
  const [welcome, setWelcome] = useState("Hello");
  const welcomeArray = ["Hello", "rohit", "ji", "kya", "hal", "chal", "Hello", "rohit", "ji", "kya", "hal", "chal"];
  let currentIndex = 0;

  const handleWelcome = () => {
    if (currentIndex < welcomeArray.length) {
      setWelcome(welcomeArray[currentIndex]);
      currentIndex++;
      setTimeout(handleWelcome(), 1000);
    }
  };

  useEffect(() => {
    handleWelcome();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor: "black", color: "white", display: "flex", alignContent: "center", fontSize: "30px", fontWeight: "700" }}>
      {welcome}
    </div>
  );
};

export default SplashScreen;
