"use server";

import { getImagesData } from "@/lib/helper";
import { SearchPlacesTypes } from "@/types/searchPlaces";

export async function placeSearch(searchParams: URLSearchParams) {
  try {
    const result = await fetch(
      `https://api.foursquare.com/v3/places/search?${searchParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "fsq3fY/E2UibVTR9wVvlQ8D6ubTLJopWa3ZExKQ6P8AdIPA=",
        },
        cache: "force-cache",
      }
    );
    const imagesData = await getImagesData();
    const images = imagesData?.map((item) => item.urls);
    const { results }: { results: SearchPlacesTypes[] } = await result.json();
    if (images) {
      const fullData = results.map((i, index) => ({
        ...i,
        imageUrl: images[index],
      }));
      return fullData;
    }
  } catch (err) {
    console.error(err);
  }
}
