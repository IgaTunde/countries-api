import SearchBar from "../HeaderComponent/SearchBar";
import DropDown from "../HeaderComponent/DropDown";
import Card from "./Card";
import { useContext } from "react";
import { CountryContext } from "../Context/CountryContext";


function Main() {
  const { searchText } = useContext(CountryContext);
  return (
    <div className="pt-24">
      <div className="flex flex-col lg:flex-row items-start justify-between px-6 lg:px-12 py-10 lg:py-8">
        <SearchBar />
        <DropDown />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Card input={searchText} />
      </div>
    </div>
  );
}

export default Main;
