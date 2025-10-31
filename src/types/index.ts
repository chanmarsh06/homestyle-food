import { StaticImageData } from "next/image";

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string | StaticImageData;
  spiceLevel?: string;
  servings?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  message: string;
  location: string;
};
