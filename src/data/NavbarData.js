export const NavbarData = {
  categories: [
    {
      id: 1,
      title: "Shop",
      link: "/products",
    },
    {
      id: 2,
      title: "About",
      link: "pages/products.html",
    },
  ],
  navbarActions: [
    { id: 1, title: "Wishlist", icon: "fa fa-heart rating-icon", link: "/wishlist", hasIconBadge: true },
    { id: 2, title: "Cart", icon: "fa fa-shopping-cart", link: "/cart", hasIconBadge: true },
    { id: 3, title: "Profile", icon: "fa fa-user", link: "/login", hasIconBadge: false },
  ],
};
