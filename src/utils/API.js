import axios from "axios";

export default {
  RandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  DogBreed: function() {
    return axios.get("https://dog.ceo/api/breed/");
  },
  DogBreedList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
