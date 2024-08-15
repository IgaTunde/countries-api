import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CountryContext } from "../Context/CountryContext";

function SearchBar() {
  const { inputHandler } = useContext(CountryContext);
  return (
    <div className="relative w-full lg:w-[60%] text-DarkGrayLightModeInput ">
      <span className="absolute inset-y-0 left-0 flex items-center pl-6  pointer-events-none">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <input
        onChange={inputHandler}
        type="search"
        name="search-form"
        id="search-form"
        className="w-full lg:w-[60%] pl-16 pr-3 py-2 border rounded-md focus:outline-none focus:ring-offset-fuchsia-50 focus:border-darkBlueDarkModeEL dark:bg-darkBlueDarkModeEL dark:text-whiteDarkModeTextAndLightModeEl border-none shadow-lg cursor-pointer"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchBar;
