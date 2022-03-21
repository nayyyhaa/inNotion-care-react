import { v4 as uuid } from "uuid";
import bathbomb from "../../assets/bath-bomb.jpg";
import insense from "../../assets/inscence.jpg";
import facemask from "../../assets/facemask.jpg";
import highlighter from "../../assets/highlighter.jpg";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Blossom inscense sticks",
    description: "Refreshing aura for you.",
    price: 249,
    rating: 5,
    ratingNo: 99,
    image: insense,
    inStock: true,
    categoryName: ["room", "soul"],
  },
  {
    _id: uuid(),
    title: "Shimmer face mask",
    description: "For clear subtle skin.",
    price: 399,
    rating: 4.5,
    ratingNo: 9,
    image: facemask,
    inStock: true,
    categoryName: ["body", "vegan"],
  },
  {
    _id: uuid(),
    title: "Cream highlighter",
    description: "For youthful you.",
    price: 759,
    rating: 3.6,
    ratingNo: 29,
    image: highlighter,
    inStock: true,
    categoryName: ["body", "vegan"],
  },
  {
    _id: uuid(),
    title: "Mystery bath bomb",
    description: "Himalayan pink salt bath bomb.",
    price: 99,
    rating: 4.8,
    ratingNo: 99,
    image: bathbomb,
    inStock: false,
    categoryName: ["body", "vegan", "soul"],
  },
];
