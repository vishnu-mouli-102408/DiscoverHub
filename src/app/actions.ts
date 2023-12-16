"use server";

import { getImagesData } from "@/lib/helper";
import { SearchPlacesTypes, imageUrl } from "@/types/searchPlaces";

export async function placeSearch(searchParams: URLSearchParams) {
  try {
    // console.log({ searchParams });

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
    // console.log({ results });
    // console.log(process.env.FORESQUARE_API_KEY);

    const imagesData = await getImagesData(2, 100);
    const images: imageUrl[] = (imagesData || []).map((item) => item.urls);
    // console.log({ images });

    const newData = Array.from({ length: 2 }, () => images).flat();
    // console.log({ newData });

    if (newData) {
      const fullData = results.map((i, index) => ({
        ...i,
        imageUrl: newData[index],
      }));
      // console.log({ fullData });

      return fullData;
    }
  } catch (err) {
    console.error(err);
  }
}
