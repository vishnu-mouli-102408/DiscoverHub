type Categories = {
  id: number;
  name: string;
  short_name: string;
  plural_name: string;
  icon: {
    prefix: string;
    suffix: string;
  };
};

type LocationType = {
  address: string;
  country: string;
  cross_street: string;
  formatted_address: string;
  locality: string;
  postcode: string;
  region: string;
};

export type SearchPlacesTypes = {
  imageUrl: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  categories: Categories[];
  closed_bucket: string;
  distance: number;
  fsq_id: string;
  location: LocationType;
  name: string;
  timezone: string;
};

export type imageUrl = {
  full: string;
  raw: string;
  regular: string;
  small: string;
  thumb: string;
};

export type singleData = {
  fsq_id: string;
  link: string;
  location: {
    address: string;
    census_block: string;
    country: string;
    cross_street: string;
    dma: string;
    formatted_address: string;
    locality: string;
    postcode: string;
    region: string;
  };
  name: string;
  timezone: string;
  imageUrl: imageUrl;
};
