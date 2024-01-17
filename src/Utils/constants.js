export const userIcon =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_KEY,
  },
};

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg";

export const IMG_CND_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
