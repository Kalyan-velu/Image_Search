import axios from "axios";
const api=axios.create({baseURL:`https://pixabay.com/api`})

export const SearchImage=({search,amount})=>api.get(`/?key=32915224-7b6686798e81f05bea890ceed&q=${search}&image_type=photo&per_page=${amount}`)