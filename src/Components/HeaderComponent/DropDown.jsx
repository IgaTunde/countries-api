import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CountryContext } from "../Context/CountryContext";

export default function DropDown() {
  const { filterByRegion } = useContext(CountryContext);

  const handleRegionSelect = (region) => {
    filterByRegion(region);
  };

  return (
    <Menu as="div" className="relative inline-block text-left pt-6 lg:pt-1">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-20 rounded-md bg-white dark:bg-darkBlueDarkModeEL dark:text-whiteDarkModeTextAndLightModeEl px-3 py-2 pl-6 text-sm font-semibold text-gray-900 shadow-sm">
          Filter by Region
          <FontAwesomeIcon
            icon={faAngleDown}
            aria-hidden="true"
            className="-mr-1 h-5 w-5 animate-pulse"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute z-10 mt-2 w-full origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in dark:bg-darkBlueDarkModeEL"
      >
        <div className="py-1">
          {["Africa", "America", "Asia", "Europe", "Oceania"].map((region) => (
            <MenuItem key={region}>
              <button
                onClick={() => handleRegionSelect(region)}
                className="block w-full text-left pl-6 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 dark:text-whiteDarkModeTextAndLightModeEl dark:data-[focus]:bg-veryDarkBlueDarkModeBg"
              >
                {region}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
