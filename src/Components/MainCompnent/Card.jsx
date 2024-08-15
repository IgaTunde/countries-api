import ScrollToTop from "react-scroll-to-top";
import { useContext } from "react";
import { CountryContext } from "../Context/CountryContext";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  const { flags, name, population, region, capital } = data;
  const { setCountry } = useContext(CountryContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setCountry(data);
    navigate("/details");
  };

  return (
    <div
      className="bg-whiteDarkModeTextAndLightModeEl rounded-lg drop-shadow-2xl h-full dark:bg-darkBlueDarkModeEL hover:translate-y-3 transition-transform"
      onClick={handleClick}
    >
      <div
        className={`bg-cover bg-center  w-full rounded-t-lg h-60 lg:h-56 `}
        style={{ backgroundImage: `url("${flags.png}")` }}
      ></div>

      <article className="pl-6">
        <section className="py-6">
          <h3 className="font-extrabold text-xl">{name}</h3>
        </section>

        <section className="pb-12">
          <p className="">
            <strong>Population:</strong> {population.toLocaleString()}
          </p>
          <p className="pt-1">
            <strong>Region:</strong> {region}
          </p>
          <p className="pt-1">
            <strong>Capital:</strong> {capital}
          </p>
        </section>
      </article>
    </div>
  );
}

function CardContainer() {
  const { filteredCountries } = useContext(CountryContext);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:px-12 w-80 md:w-full md:px-6 gap-12 text-start cursor-pointer pb-20 ">
      {filteredCountries.map((item) => {
        return <Card key={item.name} data={item} />;
      })}
      <ScrollToTop
        smooth
        duration={500}
        className="text-center items-center justify-center flex"
      />
    </div>
  );
}
export default CardContainer;
