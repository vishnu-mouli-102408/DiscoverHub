"use server";

import { getImagesData, getRandomImage } from "@/lib/helper";
import { SearchPlacesTypes, imageUrl, singleData } from "@/types/searchPlaces";

export async function placeSearch(searchParams: URLSearchParams) {
  try {
    const result = await fetch(
      `https://api.foursquare.com/v3/places/search?${searchParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: process.env.FORESQUARE_API_KEY as string,
        },
        cache: "force-cache",
      }
    );
    const { results }: { results: SearchPlacesTypes[] } = await result.json();
    const imagesData = await getImagesData(2, 100);
    const images: imageUrl[] = (imagesData || []).map((item) => item.urls);
    const newData = Array.from({ length: 2 }, () => images).flat();
    if (newData) {
      const fullData = results.map((i, index) => ({
        ...i,
        imageUrl: newData[index],
      }));
      return fullData;
    }
  } catch (err) {
    console.error(err);
  }
}

export async function placeDetails(searchParams: URLSearchParams) {
  try {
    const results = await fetch(
      `https://api.foursquare.com/v3/places/5a187743ccad6b307315e6fe?${searchParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: process.env.FORESQUARE_API_KEY as string,
        },
      }
    );
    const data: singleData = await results.json();
    const imagesData = await getRandomImage();
    if (imagesData) {
      return { ...data, imageUrl: imagesData };
    }
  } catch (err) {
    console.error(err);
  }
}
