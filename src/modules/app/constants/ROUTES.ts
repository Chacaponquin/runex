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
  },
};

export const API_ROUTES = {
  USER: {
    GET_CURRENT_USER: "/user-token",
  },
};
