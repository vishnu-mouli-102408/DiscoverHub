"use client";
import { placeSearch } from "@/app/actions";
import { SearchPlacesTypes } from "@/types/searchPlaces";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CoffeePage = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<SearchPlacesTypes>({
    imageUrl: {
      full: "",
      raw: "",
      regular: "",
      small: "",
      thumb: "",
    },
    categories: [],
    closed_bucket: "",
    distance: 0,
    fsq_id: "",
    location: {
      address: "",
      country: "",
      cross_street: "",
      formatted_address: "",
      locality: "",
      postcode: "",
      region: "",
    },
    name: "",
    timezone: "",
  });
  const searchParams = new URLSearchParams({
    query: "coffee",
    near: "Andhra Pradesh",
    open_now: "true",
    limit: "50",
    sort: "DISTANCE",
  });

  useEffect(() => {
    placeSearch(searchParams)
      .then((data) => {
        console.log("DATA", data);
        if (data) {
          const requiredData = data.find((item) => item.fsq_id === params.id);
          if (requiredData) {
            setData(requiredData);
          }
        }
        return data; // You can return the data if needed
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!data) {
    return (
      <>
        <h1 className="flex flex-col justify-center items-center">
          No data found
        </h1>
      </>
    );
  }
  return (
    <main className="flex min-h-screen flex-col p-12 bg-cover bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30456.jpg?size=626&ext=jpg&ga=GA1.1.1266420118.1702626864&semt=ais')]">
      <h1 className="text-xl justify-start mb-16 cursor-pointer">
        <Link href="/places">⬅ Back to Posts</Link>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 mb-8">
        <Image
          className="rounded-lg m-auto"
          src={data.imageUrl.small}
          alt="Images"
          width={400}
          height={400}
        />
        <div className="max-w-md p-6 bg-slate-300 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-auto">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.name}
          </h5>
          {/* <h1 className="text-gray-700">{params.id}</h1> */}
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.timezone}
          </p>
        </div>
      </div>
    </main>
  );
};

export default CoffeePage;
