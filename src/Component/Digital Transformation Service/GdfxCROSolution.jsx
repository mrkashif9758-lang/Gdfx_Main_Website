function GdfxCROSolution({
  mainHeading,
  subHeading,
  introParagraph,
  highlightText,
  cardsData = [],
  midHeading,
}) {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            {mainHeading}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              {subHeading}
            </span>
          </h2>

          <p className="P text-off_white mt-1.5">{introParagraph}</p>
          <p className="P text-primaryBlue mt-1.5">{highlightText}</p>

          <h2 className="H3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary mb-3 mt-10 text-center">
            {midHeading}
          </h2>

          <div className="md:py-14 py-5 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 relative divide-y-reverse divide-y-2 divide-primaryBlue sm:divide-y-0">
            <div className="hidden sm:block absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 border border-primaryBlue"></div>
            <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  h-[92%] border border-primaryBlue"></div>

            {cardsData.map(({ heading, paragraph, shadowClass }, index) => (
              <div key={index} className="pb-4 sm:pb-0 grid">
                <div
                  className={`bg-primary-gradient  hover:scale-[1.02] transition-all duration-300 rounded-2xl  p-[18px] text-center min-h-[200px] sm:min-h-[250px] lg:min-h-[200px] ${shadowClass}`}
                >
                  <h4 className="H4 font-bold text-white mb-1.5">{heading}</h4>
                  <p className="P text-off_white">{paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GdfxCROSolution;
