import { v4 as uuid } from "uuid";

import nature from "../../assets/nature-product.jpg";
import body from "../../assets/body-product.jpg";
import soul from "../../assets/soul-product.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    tag: "vegan",
    categoryName: "FOR NATURE",
    description: "Shop Naturals",
    image: nature,
    link: "/products",
    contentColor: "green",
    subCategories: [
      {
        _id: uuid(),
        tag: "vegan",
        title: "Vegan friendly",
      },
    ],
  },
  {
    _id: uuid(),
    tag: "body",
    categoryName: "FOR BODY",
    description: "Shop Bodylicious",
    image: body,
    link: "/products",
    contentColor: "yellow",
    subCategories: [
      {
        _id: uuid(),
        tag: "body",
        title: "Body Essentials",
      },
    ],
  },
  {
    _id: uuid(),
    tag: "soul",
    categoryName: "FOR SOUL",
    description: "Shop Soulfulness",
    image: soul,
    link: "/products",
    contentColor: "blue",
    subCategories: [
      { _id: uuid(), tag: "room", title: "Room Decor" },
      {
        _id: uuid(),
        tag: "soul",
        title: "Care products",
      },
    ],
  },
];
