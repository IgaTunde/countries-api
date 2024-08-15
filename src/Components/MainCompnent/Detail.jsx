import { useContext } from "react";
import { CountryContext } from "../Context/CountryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BorderCountriesBtn from "./BorderBtn";
import { useNavigate } from "react-router-dom";
import data from '../data.json'

function DetailContainer() {
  const { getCountry, setCountry } = useContext(CountryContext);
  const navigate = useNavigate();
  const country = getCountry();



  const handleBack = () => {
    navigate("/");
  };
 const handleBorderCountryClick = (borderCountry) => {
   const newCountry = data.find((c) => c.alpha3Code === borderCountry);
   if (newCountry) {
     setCountry(newCountry);
   }
 };

 if (!country) {
   return (
     <div className="pl-10 pt-24 h-screen">
       <p>No country selected</p>
       <button
         className="border px-5 shadow-xl py-1 rounded-md my-3 dark:border-none dark:bg-darkBlueDarkModeEL dark:shadow-veryDarkBlueLightModeText dark:shadow-md"
         onClick={handleBack}
       >
         <FontAwesomeIcon icon={faArrowLeft} className="pr-3" />
         Back
       </button>
     </div>
   );
 }

  return (
    <div className="px-10 pt-24 pb-20">
      <button
        className="border px-5 shadow-xl py-1  rounded-md mb-6 dark:border-none dark:bg-darkBlueDarkModeEL dark:shadow-veryDarkBlueLightModeText dark:shadow-md"
        onClick={handleBack}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="pr-3" />
        Back
      </button>

      <div className="drop-shadow-2xl flex flex-col md:flex-row items-start lg:items-center lg:gap-20 pt-8">
        <img
          src={country.flags.png}
          alt={`${country.name} flag`}
          className="lg:w-1/2 w-full"
        />

        <article className="text-sm">
          <section className="py-8">
            <h3 className="font-extrabold text-xl">{country.name}</h3>
          </section>

          <div className="flex flex-col md:flex-row  md:items-center justify-between lg:gap-20">
            <section className="pb-12">
              <p className="pt-2">
                <strong>Native Name:</strong> {country.nativeName}
              </p>
              <p className="pt-2">
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <p className="pt-2">
                <strong>Region:</strong> {country.region}
              </p>
              <p className="pt-2">
                <strong>Sub Region:</strong> {country.subregion}
              </p>
              <p className="pt-2">
                <strong>Capital:</strong> {country.capital}
              </p>
            </section>

            <section className="pb-12">
              <p className="pt-2">
                <strong>Top Level Domain:</strong>{" "}
                {country.topLevelDomain.join(", ")}
              </p>
              <p className="pt-2">
                <strong>Currency Name:</strong>{" "}
                {country.currencies.map((c) => c.name).join(", ")}
              </p>
              <p className="pt-2">
                <strong>Languages:</strong>{" "}
                {country.languages.map((l) => l.name).join(", ")}
              </p>
            </section>
          </div>

          <BorderCountriesBtn
            borders={country.borders}
            onBorderClick={handleBorderCountryClick}
          />
        </article>
      </div>
    </div>
  );
}

export default DetailContainer;
