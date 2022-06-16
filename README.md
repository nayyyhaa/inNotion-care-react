<div align="center">
  <img src="src/toolkit/assets/self-love.png" height="100" width="100" alt="logo"/>
  <h1><a href="https://innotion-carev2.netlify.app/">inNotion Care</a> - Ecommerce App</h1>
    <p>inNotion Care is an e-commerce app made using ReactJS, and mock backend using mockBee.</p>
 </div>

<div align="center">
  <h2>Preview☀️</h2>
  <img src="src/toolkit/assets/preview.gif" alt="logo"/>
 </div>


## Available Screens
- Home Page
- Product Listing Page
- Single Product Detail Page
- Cart Management Page
- Wishlist Management Page
- Checkout Page
- Order Page
- Authentication (Login, Signup and Logout) Pages
- Page not found(404 page)

## Features:
Responsive screens with:
- **Home Page** with a list of featured categories.
- Feature in Landing page: On clicking on any one of the categories user redirected to the product list page with the selected category.
- **Product Listing Page** - There are multiple filters on the product listing page including,
    1) Price: A radio button to sort from low to high & high to low.
    2) Category: A checkbox with various categories according to the theme.
    3) Ratings: A slider for ratings.
    5) Clear All button: clear filters from where user can clear all the applied filters.
    6) Search bar: To search specific product by name.
    
  On the product cards, I can see two call-to-action buttons,
  1) Add to Cart: User can click on the "Add to Cart" primary button which will add the item to the cart & once added shows "Go to Cart" on the product card.
  2) Add to Wishlist: User can click on a "Add to Wishlist" secondary button or "Wishlist" secondary icon button where if I click adds the item in the wishlist & vice-verse.
  3) Share: User can copy product link in the clipboard.
- **Single Product Detail Page** - Information of single product is mentioned.
- **Cart Management**, From the navbar, User can navigate to the cart where all the products that user want to buy are mentioned.
    On the product card,
    1) Usercan see the quantity of a particular product.
    2) User can Increase or Decrease the quantity of a particular product.
    3) Remove the product from the cart
    4) Add the product to the Wishlist
    5) User can see the price details card of the cart containing a button to checkout which will show the total price of the products with its quantity.
- **Wishlist Management Page** - From the navbar, User can navigate to my wishlist where all the products that user would like to buy are mentioned.
    On the product card,
    1) User can remove the item from the wishlist
    2) Add the item to the cart
- **Checkout Page** - After placing order user can see the order information along with address management integrated.
- **Order Page** - After doing payment from RazorPay, successfull order information will be shown here.
- **Authentication Page** - For user to login, signup. User will be redirected to login page if he/she is not authorised and tries to add itm in cart/wishlist.

## Technologies & Concepts used

- React JS with useReducer + useContext
- Razorpay-payment integration
- React-router-dom
- JSX
- HTML/CSS
- inNotion UI library for styled components.
To know about the styled components, their variations, read the [inNotion UI Documentation](https://innotion-ui.netlify.app/).
- Git For Version Control
- Netlify for Deployment
- Cloudinary for Image Hosting of Video Thumbnails

# Live : https://innotion-carev2.netlify.app/










