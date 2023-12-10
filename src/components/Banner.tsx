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
    <div className="p-20 text-center">
      <h1>
        <span className="text-5xl p-1 m-2 text-slate-100">{titleText[0]}</span>
        <span className="text-5xl p-1 m-2 text-lime-600">{titleText[1]}</span>
      </h1>
      <p className="p-2 m-2 text-xl">{desc}</p>
      <button
        type="button"
        className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
