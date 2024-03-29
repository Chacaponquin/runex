export const APP_ROUTES = {
  ROOT: "/",
  AUTH: {
    LOGIN: "/login",
    SIGN_UP: "/sign-up",
    FORGOT_PASSWORD: "/forgot-password",
  },
  SECTION: {
    CLOTHES: "/section/clothes",
    MEDICINE: "/section/medicine",
    SEARCH_CLOTHES: "/section/clothes/search",
    SEARCH_MEDICINE: "/section/medicine/search",
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
  },
  CLOTHE: {
    CREATE: "/clothe/create",
    UPLOAD_IMAGES: "/clothe/upload-images",
    REMOVE: "/clothe/remove",
    EDIT: "/clothe/edit",
  },
  MEDICINE: {
    CREATE: "/medicine/clothe",
    EDIT: "/medicine/clothe",
    REMOVE: "/medicine/remove",
  },
};
