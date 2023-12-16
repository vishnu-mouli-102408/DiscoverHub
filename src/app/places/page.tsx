"use client";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Head from "next/head";
import { placeSearch } from "../actions";
import { useEffect, useState } from "react";
import { SearchPlacesTypes } from "@/types/searchPlaces";

const Places = () => {
  const [data, setData] = useState<SearchPlacesTypes[]>([]);
  const handleOnBannerBtnClick = () => {
    console.log("Hello Banner Button");
  };

  const searchParams = new URLSearchParams({
    query: "coffee",
    near: "Andhra Pradesh",
    open_now: "true",
    limit: "10",
    sort: "DISTANCE",
  });

  useEffect(() => {
    placeSearch(searchParams)
      .then((data) => {
        console.log("DATA", data);
        if (data) {
          setData(data);
        }
        return data; // You can return the data if needed
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-cover bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30456.jpg?size=626&ext=jpg&ga=GA1.1.1266420118.1702626864&semt=ais')]">
      <Head>
        <title>DiscoverHub: Discover Nearby PLaces</title>
      </Head>
      <Banner
        buttonText="View stores nearby"
        handleOnClick={handleOnBannerBtnClick}
        title={"Coffee Connoisseur"}
        desc={"Discover Your local Cofee Shop"}
      />
      <h1 className="text-2xl font-bold text-start p-4">Popular Stores</h1>
      {/* <div className="grid grid-cols-1 gap-10 justify-items-center p-8"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.length > 0 &&
          data.map((item: SearchPlacesTypes) => {
            return (
              <Card
                key={item.fsq_id}
                name={item.name}
                imageUrl={item.imageUrl.small}
                hrefRoute={`/places/${item.fsq_id}`}
              />
            );
          })}
      </div>
    </main>
  );
};

export default Places;
