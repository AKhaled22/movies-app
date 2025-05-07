import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
    "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
  },
});
