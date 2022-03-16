import bathbomb from "../assets/bath-bomb.jpg";
import insense from "../assets/inscence.jpg";
import facemask from "../assets/facemask.jpg";
import highlighter from "../assets/highlighter.jpg";

export const ProductListingData = [
  {
    id: 1,
    name: "Blossom inscense sticks",
    description: "Refreshing aura for you.",
    price: 249,
    rating: 5,
    ratingNo: 99,
    image: insense,
    inStock: true,
    category: ["room"]
  },
  {
    id: 2,
    name: "Shimmer face mask",
    description: "For clear subtle skin.",
    price: 399,
    rating: 4.5,
    ratingNo: 9,
    image: facemask,
    inStock: true,
    category: ["body", "vegan"]
  },
  {
    id: 3,
    name: "Cream highlighter",
    description: "For youthful you.",
    price: 759,
    rating: 3.6,
    ratingNo: 29,
    image: highlighter,
    inStock: true,
    category: ["body", "vegan"]
  },
  {
    id: 4,
    name: "Mystery bath bomb",
    description: "Himalayan pink salt bath bomb.",
    price: 99,
    rating: 4.8,
    ratingNo: 99,
    image: bathbomb,
    inStock: false,
    category: ["body", "vegan"]
  }
];

export const CategoriesData = [
  {
    id: "body",
    name: "Body Essentials"
  },
  {
    id: "room",
    name: "Room Decor"
  },
  {
    id: "vegan",
    name: "Vegan friendly"
  }
];
