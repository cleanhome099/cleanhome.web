import { IProduct } from "../interface";

export const PRODUCT_MOCK: IProduct[] = [
  {
    title: "apartments",
    price: 300,
    isSoon: false,
    id: 1,
    category: "Apartments cleaning",
    images: {
      main: "https://galmangroup.com/wp-content/uploads/2021/12/whitney-apartments-featured-image.jpg",
    },
    tags: ["house", "cleaning"],
  },
  {
    title: "house",
    price: 300,
    isSoon: false,
    id: 3,
    category: "Office cleaning",
    images: {
      main:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnvR_Y7YVyw6c2Bd60NDT9HM8SjI-wtjJGw&s",
    },

    tags: ["house", "cleaning"],
  },
  {
    title: "carpet",
    price: 300,
    isSoon: false,
    id: 2,
    category: "House cleaning",
    images: {
      main:  "https://i5.walmartimages.com/seo/TWINNIS-Boho-Area-Rug-Vintage-Tribal-Carpet-Anti-Slip-Rug-Washable-Persian-Carpet-for-Living-Room-Bedroom-Red-5-x8_0e728c9b-166c-4658-8254-5688e585936a.0764fae229334a747f1f531f18140ae3.jpeg",
    },

    tags: ["house", "cleaning"],
  },
  {
    title: "handyman",
    price: 150,
    isSoon: false,
    id: 4,
    category: "Handyman",
    images: {
      main: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnvR_Y7YVyw6c2Bd60NDT9HM8SjI-wtjJGw&s",
    },
    tags: ["roof", "cleaning", "house"],
    descriptions: "Soon",
  },
];

export const SOON = [
  {
    title: "A/C",
    price: 199,
    isSoon: true,
    id: 5,
    category: "Cleaning clothes ",
    images: {
      main: "https://s3-media0.fl.yelpcdn.com/bphoto/PIxftmwX47XwC0-3npe6Hw/1000s.jpg",
    },
    tags: ["clothes", "cleaning"],
    descriptions: "Soon",
  },
];
