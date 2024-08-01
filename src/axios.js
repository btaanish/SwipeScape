import axios from "axios";

const instance = axios.create({
  baseURL: "http://tinder-backend.herokuapp.com",
});

export default instance;
