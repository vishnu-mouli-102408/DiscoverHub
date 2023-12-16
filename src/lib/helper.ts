import { createApi } from "unsplash-js";
import { ApiResponse } from "unsplash-js/dist/helpers/response";

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

interface Random {
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  // other properties
}

// export function getRandomImage():Random {
//   const data = api.photos
//     .getRandom({ query: "restaurant" })
//     .then((result) => {
//       if(result){
//         console.log("RESULT", result.response);
//         return result.response?.urls;
//       }
//     })
//     .catch((err) => {
//       console.log("Error Occured while Fetching", err);
//     });
//   return data;
// }

export function getRandomImage(): Promise<Random["urls"]> {
  return api.photos
    .getRandom({ query: "restaurant" })
    .then((result: ApiResponse<Random | Random[]>) => {
      if (result && "urls" in result.response!) {
        // console.log("RESULT", result.response.urls);
        return result.response.urls;
      } else {
        // Handle the case where result is falsy (optional)
        throw new Error("Unexpected result");
      }
    })
    .catch((err) => {
      console.log("Error Occurred while Fetching", err);
      throw err; // Propagate the error if needed
    });
}
