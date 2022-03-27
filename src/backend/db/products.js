import { v4 as uuid } from "uuid";
import bathbomb from "../../toolkit/assets/bath-bomb.jpg";
import facemaskAvocado from "../../toolkit/assets/facemask-avocado.jpg";
import soapCoffee from "../../toolkit/assets/soap-coffee.jpg";
import seaSalt from "../../toolkit/assets/sea-salt.jpg";
import candle from "../../toolkit/assets/soul-product.jpg";
import insense from "../../toolkit/assets/inscence.jpg";
import facemask from "../../toolkit/assets/facemask.jpg";
import highlighter from "../../toolkit/assets/highlighter.jpg";
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
    inStock: false,
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
    inStock: true,
    categoryName: ["body", "vegan", "soul"],
  },
  {
    _id: uuid(),
    title: "Avocado Facemask",
    description: "Natural & Refreshing.",
    price: 199,
    rating: 2.8,
    ratingNo: 34,
    image: facemaskAvocado,
    inStock: true,
    categoryName: ["body", "vegan"],
  },
  {
    _id: uuid(),
    title: "Coffee Soap Bar",
    description: "Natural & Refreshing.",
    price: 249,
    rating: 1.3,
    ratingNo: 3,
    image: soapCoffee,
    inStock: true,
    categoryName: ["body", "vegan"],
  },
  {
    _id: uuid(),
    title: "Bathing Sea Salt",
    description: "Cleanse you soul.",
    price: 649,
    rating: 3,
    ratingNo: 55,
    image: seaSalt,
    inStock: true,
    categoryName: ["body", "soul"],
  },
  {
    _id: uuid(),
    title: "Aroma Candle",
    description: "Fill your room with freshness.",
    price: 899,
    rating: 4.8,
    ratingNo: 53,
    image: candle,
    inStock: true,
    categoryName: ["room", "soul"],
  },
];
