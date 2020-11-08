import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import baju1 from "@/assets/img/baju1.jpg";
import baju2 from "@/assets/img/baju2.jpg";
import baju3 from "@/assets/img/baju3.jpg";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    data: [
      {
        uri: baju1,
        name: "orange T-shirts",
        price: "150000",
      },
      {
        uri: baju2,
        name: "Gray T-shirts",
        price: "250000",
      },
      {
        uri: baju3,
        name: "Cardigan",
        price: "350000",
      },
    ],
    jokes: null,
    url: "https://official-joke-api.appspot.com/random_ten",
    loginData: null,
  },
  mutations: {
    addCart: (state, data) => {
      state.cart.push(data);
      console.log("cart", state.cart);
    },
    changeJokes: (state, data) => {
      state.jokes = data;
    },
    changeLoginData: (state, data) => {
      state.loginData = data;
    },
  },
  actions: {
    async getJokes({ state, commit }) {
      try {
        const response = await axios.get(state.url);

        commit("changeJokes", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async login({ state, commit }, data) {
      try {
        let loginData = new FormData();
        loginData.append("name", data.name);
        loginData.append("email", data.email);

        const response = await axios.post(state.url, loginData, {
          credentials: true,
          headers: {
            Authorization: `Bearer $token`,
          },
        });

        commit("changeLoginData", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
