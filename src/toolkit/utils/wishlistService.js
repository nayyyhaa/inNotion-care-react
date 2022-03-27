import axios from "axios";

export const getWishlistService = async (authToken) => {
  try {
    const response = await axios.get("/api/user/wishlist", {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("getWishlist : Error in fetching wishlist details", e);
  }
};

export const addToWishlistService = async (authToken, product) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: { authorization: authToken },
      }
    );
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("addToWishlist : Error in adding product to wishlist", e);
  }
};

export const removeFromWishlistService = async (authToken, id) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("removeFromWishlist : Error in removing product from wishlist", e);
  }
};
