import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import Main from "./Components/MainCompnent/Main";
import DetailContainer from "./Components/MainCompnent/Detail";

function App() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <Router>
      <div className="dark:bg-veryDarkBlueDarkModeBg bg-veryLightGrayLightModeBg dark:text-whiteDarkModeTextAndLightModeEl font-nunito w-full relative">
        <div className="flex items-center justify-between dark:bg-darkBlueDarkModeEL bg-whiteDarkModeTextAndLightModeEl px-6 py-8 lg:px-12 fixed w-full top-0 z-50 ">
          <h3 className="font-extrabold">Where in the world?</h3>
          <button
            className="flex items-center gap-2 "
            onClick={() => darkModeHandler()}
          >
            {dark && <FontAwesomeIcon icon={faSun} />}
            {!dark && <FontAwesomeIcon icon={faMoon} />}
            <h3 className="font-semibold">Dark Mode</h3>
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<DetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
