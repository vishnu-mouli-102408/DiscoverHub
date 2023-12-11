"use client";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Head from "next/head";

const Coffee = () => {
  const handleOnBannerBtnClick = () => {
    console.log("Hello Banner Button");
  };

  return (
    <div>
      <Head>
        <title>DiscoverHub: Discover Nearby Coffee Shops</title>
      </Head>
      <Banner
        buttonText="View stores nearby"
        handleOnClick={handleOnBannerBtnClick}
        title={"Coffee Connoisseur"}
        desc={"Discover Your local Cofee Shop"}
      />
      <h1 className="text-2xl font-bold text-start p-4">Popular Stores</h1>
      <div className="grid grid-cols-1 gap-10 justify-items-center p-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Coffee;
