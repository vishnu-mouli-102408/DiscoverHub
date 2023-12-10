import Banner from "@/components/Banner";
import Head from "next/head";

const Coffee = () => {
  const handleOnBannerBtnClick = () => {
    console.log("Hello Banner Button");
  };

  return (
    <div>
      <Head>
        <title>DiscoverHub: Discover Nearby Places</title>
      </Head>
      <Banner
        buttonText="View stores nearby"
        handleOnClick={handleOnBannerBtnClick}
        title={"Coffee Connoisseur"}
        desc={"Discover Your local Cofee Shop"}
      />
    </div>
  );
};

export default Coffee;
