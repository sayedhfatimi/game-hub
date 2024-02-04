import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6e5a4c5288314bb2954b057c2027a6a7",
  },
});
