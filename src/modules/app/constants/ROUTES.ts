import { PRODUCT_TYPES } from "@modules/product/constants";

export const APP_ROUTES = {
  ROOT: "/",
  AUTH: {
    LOGIN: "/login",
    SIGN_UP: "/sign-up",
    FORGOT_PASSWORD: "/forgot-password",
  },
  SECTION: {
    CLOTHES: "/section/clothes",
    MEDICINE: "/section/medicines",
    SEARCH_CLOTHES: "/section/clothes/search",
    SEARCH_MEDICINE: "/section/medicines/search",
    BUILD_SEARCH_ROUTE({
      search,
      section,
    }: {
      section: PRODUCT_TYPES;
      search: string;
    }) {
      let url: string;

      if (section === PRODUCT_TYPES.CLOTHE) {
        url = "/section/clothes/search";
      } else {
        url = "/section/medicines/search";
      }

      return `${url}?q=${search}`;
    },
  },
  CHECKOUT: "/checkout",
  USER: {
    FAVORITES: "/user/favorites",
    ORDERS: "/user/orders",
  },
  ADMIN: {
    ROOT: "/admin",
    CLOTHES: "/admin/clothes",
    ORDERS: "/admin/orders",
    MEDICINES: "/admin/medicines",
  },
  INFO: {
    CONDITION_TERMS: "/info/condition-terms",
    HOW_TO_BUY: "/info/how-to-buy",
    PENALTIES: "/info/penalties",
    RETURNS: "/info/returns",
    PRIVACITY: "/info/privacity",
  },
};

export const API_ROUTES = {
  USER: {
    GET_CURRENT_USER: "/user/user-token",
    CONTACT: "/user/contact",
    ADD_PRODUCT_FAVORITE: "/user/add-product-favorite",
    DELETE_PRODUCT_FAVORITE: "/user/delete-product-favorite",
  },
  ADMIN_USER: {
    SIGN_IN: "/admin/sign-in",
  },
  CLOTHE: {
    CREATE: "/clothe/create",
    UPLOAD_IMAGES: "/clothe/upload-images",
    REMOVE: (id: string) => `/clothe/remove/${id}`,
    EDIT: "/clothe/edit",
    FILTER: "/clothe/filter",
    GET: "/clothe",
    ALL_SIZES: "/clothe/all-sizes",
    ALL_COLORS: "/clothe/all-colors",
    SIMILARS: (id: string) => `/clothe/similars/${id}`,
    FIND: (id: string) => `/clothe/find/${id}`,
    TRENDING: "/clothe/trending",
    NEW: "/clothe/new",
    POPULAR: "/clothe/popular",
  },
  MEDICINE: {
    CREATE: "/medicine/clothe",
    EDIT: "/medicine/clothe",
    REMOVE: (id: string) => `/medicine/remove/${id}`,
    FILTER: "/medicine/filter",
    SIMILARS: (id: string) => `/medicine/similars/${id}`,
    FIND: (id: string) => `/medicine/find/${id}`,
    GET: "/medicine",
    TRENDING: "/medicine/trending",
    NEW: "/medicine/new",
    POPULAR: "/medicine/popular",
  },
};
