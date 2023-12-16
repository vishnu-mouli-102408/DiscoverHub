"use client";
import { placeDetails, placeSearch } from "@/app/actions";
import { singleData } from "@/types/searchPlaces";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CoffeePage = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<singleData>({
    fsq_id: "",
    link: "",
    location: {
      address: "",
      census_block: "",
      country: "",
      cross_street: "",
      dma: "",
      formatted_address: "",
      locality: "",
      postcode: "",
      region: "",
    },
    name: "",
    timezone: "",
    imageUrl: {
      full: "",
      raw: "",
      regular: "",
      small: "",
      thumb: "",
    },
  });
  const searchParams = new URLSearchParams({
    fsq_id: params.id,
  });

  useEffect(() => {
    placeDetails(searchParams)
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

  if (!data) {
    return (
      <>
        <h1 className="flex flex-col justify-center items-center">
          No data found
        </h1>
      </>
    );
  }
  const imageUrl =
    "https://images.unsplash.com/photo-1565650839149-2c48a094196c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3MDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDI3MTc2Nzh8&ixlib=rb-4.0.3&q=80&w=400";
  return (
    <main className="flex min-h-screen flex-col p-12 bg-cover bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30456.jpg?size=626&ext=jpg&ga=GA1.1.1266420118.1702626864&semt=ais')]">
      <h1 className="text-xl justify-start mb-16 cursor-pointer">
        <Link href="/places">⬅ Back to Posts</Link>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 mb-8">
        <Image
          className="rounded-lg m-auto"
          src={imageUrl}
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
