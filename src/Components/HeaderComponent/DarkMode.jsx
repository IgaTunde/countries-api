import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function DarkMode() {
    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
    };

    return (
      <div className=" dark:bg-blue-900">
        <button onClick={() => darkModeHandler()}>
          {dark && <FontAwesomeIcon icon={faSun} />}
          {!dark && <FontAwesomeIcon icon={faMoon} />}
          <h3 className="">Dark Mode</h3>
        </button>
      </div>
    );

}

export default DarkMode;
