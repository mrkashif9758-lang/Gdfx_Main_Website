import "../Home Page Component/styles.css";

const ProductDetailsResult = ({ title, results }) => {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center">
          <h2 className="H2 font-bold capitalize text-white mb-1 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              Result
            </span>
          </h2>

          <p className="P text-white mb-10 leading-relaxed">{title}</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 ">
          {results.map((item, index) => (
            <div
              className="w-full relative overflow-hidden group sm:h-[260px] h-[200px] rounded-sm "
              key={index}
            >
              <img
                src={item.img}
                alt={`Result ${item.id}`}
                className="w-full h-full lg:h-[260px] object-center"
              />
              <div className=" absolute w-full backdrop-blur-lg h-full lg:h-[260px] flex items-center bg-primary-gradient px-2  top-0 left-0  translate-y-full transition-transform group-hover:translate-y-0 p-2 duration-500 P text-white">
                {item?.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsResult;
