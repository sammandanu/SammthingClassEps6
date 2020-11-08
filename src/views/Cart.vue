<template>
  <div class="max-w-screen-xl mx-auto">
    <Navbar />
    <h2 class="text-center text-xl font-bold py-10">Cart</h2>
    <div
      class="flex p-4 items-center border-b border-gray justify-between"
      v-for="(item, index) in cart"
      :key="index"
    >
      <div
        class="bg-cover bg-center w-16 border border-gray rounded-md bg-no-repeat h-16"
        :style="'background-image: url(' + item.uri + ');'"
      ></div>
      <div class="">{{ item.name }}</div>
      <div class="">Rp {{ item.price }}</div>
    </div>
    <div
      class="text-right text-xl font-bold text-blue-400 py-8"
      v-if="total !== null"
    >
      Rp {{ total }}
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapState } from "vuex";
export default {
  name: "Cart",
  components: {
    Navbar,
  },
  computed: {
    ...mapState(["cart"]),
  },
  data() {
    return {
      total: null,
    };
  },
  mounted() {
    this.$store.state.data.forEach((car) => {
      this.total += parseInt(car.price);
    });
  },
};
</script>

<style></style>
