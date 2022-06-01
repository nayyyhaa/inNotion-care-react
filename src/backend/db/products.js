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
    _id: "42a35028-e567-4b5a-804e-817ae8ecc4d3",
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
    _id: "58027fcf-1854-449b-9607-27ceefe049d1",
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
    _id: "3b799232-cde3-4c22-9245-508b15539547",
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
    _id: "0c3f12ae-60ed-4fa9-a968-32133asa2399",
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
    _id: "e70c843b-8e64-4529-8b36-179bf49d0216",
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
    _id: "7bcd87a4-6827-4939-8002-282877b6185f",
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
    _id: "eb83msda-a573-4f98-8c39-b572sdjk1fec",
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
    _id: "5d48s0e3-5467-4012-9d58-59683bf28259",
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
