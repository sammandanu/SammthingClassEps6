<template>
  <div class="max-w-screen-xl mx-auto ">
    <Navbar />
    <h1 class="text-xl font-bold text-center py-10">Welcome To The Shop</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 p-4">
      <div
        class="border border-gray-400 hover:border-blue-400 p-2 rounded-lg shadow-md"
        v-for="(dat, index) in data"
        :key="index"
      >
        <div
          class="bg-cover bg-center w-full bg-no-repeat h-64"
          :style="'background-image: url(' + dat.uri + ');'"
        ></div>
        <div class="my-4 flex justify-between">
          <h2 class="text-lg ">{{ dat.name }}</h2>
          <div class="font-semibold">Rp {{ dat.price }}</div>
        </div>

        <button class="w-full p-2 bg-blue-400 text-white" @click="addCart(dat)">
          Add To Cart
        </button>
      </div>
    </div>

    <div class="p-8 text-center" v-if="!jokes">...Load Jokes</div>
    <div class="grid grid-cols-3 my-8 p-2 gap-2" v-if="jokes !== null">
      <div
        class="p-2 border border-gray-200 hover:border-blue-400"
        v-for="joke in jokes"
        :key="joke.id"
      >
        <div class="">Setup : {{ joke.setup }}</div>
        <div class="">Punchline : {{ joke.punchline }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  computed: {
    ...mapState(["data", "jokes"]),
  },
  data() {
    return {
      form: {
        nama: "danu",
        email: "sam@gma.com",
      },
    };
  },
  mounted() {
    this.getJokes();
  },
  methods: {
    ...mapActions(["getJokes"]),
    // postLogin() {
    //   this.$store.dispatch('login', form)
    // },
    addCart(dat) {
      this.$store.commit("addCart", dat);
    },
  },
};
</script>
<style>
.coba {
  background-image: url("");
}
</style>
