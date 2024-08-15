function BorderCountriesBtn({ borders, onBorderClick }) {
  return (
    <div>
      <h4 className="font-bold mb-2">Border Countries:</h4>
      <div className="grid grid-cols-3 gap-4 pt-3 *:border *:px-12 *:shadow-xl *:py-1 *:rounded-[2px] dark:*:border-none dark:*:bg-darkBlueDarkModeEL dark:*:shadow-veryDarkBlueLightModeText dark:*:shadow-md">
        {borders &&
          borders.map((border) => (
            <button
              key={border}
              onClick={() => onBorderClick(border)}
              className="relative inline-block px-5 py-2.5 bg-transparent border-2 overflow-hidden group hover:text-white"
            >
              <span className="relative z-10">{border}</span>
              <span className="absolute inset-0 bg-black/10 transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
            </button>
          ))}
      </div>
    </div>
  );
}

export default BorderCountriesBtn;
