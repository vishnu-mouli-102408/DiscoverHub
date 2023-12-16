import { createApi } from "unsplash-js";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: process.env.UNSPLASH_ACCESS_KEY as string,
});

export function getImagesData(page: number, perPage: number) {
  const data = api.search
    .getPhotos({ query: "coffee restaurant", page: page, perPage: perPage })
    .then((result) => {
      return result.response?.results;
    })
    .catch((err) => {
      console.log("Error Occured while Fetching", err);
    });
  return data;
}
