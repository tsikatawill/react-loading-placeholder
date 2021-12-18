import { useState } from "react";
import User from "./components/User";
import style from "./style.css";

const App = () => {
  const [showUser, setShowUser] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const handleShowUser = () => {
    setShowUser(true);
  };
  const toggleMode = () => {
    setDarkMode(!darkMode);
    let body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark");
    } else if (!darkMode) {
      try {
        body.classList.remove("dark");
      } catch (error) {
        return;
      }
    }
  };
  return (
    <div className="App">
      <div className="container d-flex">
        <div className="toggle">
          <button onClick={toggleMode}>{darkMode ? <>🌚</> : <>☀</>}</button>
        </div>
        <h1 className="heading">React Loading Placeholder</h1>
        {showUser ? (
          <div>
            <User />
          </div>
        ) : (
          <>
            <div className="info-text">
              <p>
                This is a simple application that displays a content placeholder
                while fetching data. A spinner gif is displayed as a random user
                is being fetched from an external api. The data gotten from the
                api is displayed as soon as it is received. The placeholder
                (spinning gif) disappears.
              </p>
              <p>Click on the button below for a live demo</p>
            </div>
            <button type="button" onClick={handleShowUser}>
              Demo
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
