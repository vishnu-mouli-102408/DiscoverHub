type btnClick = () => void;

const Banner = ({
  buttonText,
  handleOnClick,
  title,
  desc,
}: {
  buttonText: string;
  handleOnClick: btnClick;
  title: string;
  desc: string;
}) => {
  let titleText = title.split(" ");
  return (
    <div className="flex flex-col justify-center items-start p-12">
      <h1 className="pt-4">
        <span className="pr-2 text-3xl font-bold">{titleText[0]}</span>
        <span className="text-orange-600 text-3xl font-bold">
          {titleText[1]}
        </span>
      </h1>
      <p className="py-4 text-lg">{desc}</p>
      <button
        type="button"
        onClick={handleOnClick}
        className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
