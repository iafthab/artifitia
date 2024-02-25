import axios from "axios";

export default axios.create({
  baseURL:
    // "https://artifitia-api.onrender.com",
    "http://localhost:3500",

  headers: { "Content-Type": "application/json" },
});
