<template>
  <div class="flex justify-between bg-gray-200 items-center p-4">
    <div class="">Sammthing</div>
    <ul class="flex text-sm">
      <li class="p-2 hover:underline">
        <router-link to="/">Home</router-link>
      </li>
      <li class="p-2 hover:underline cursor-pointer">
        <router-link to="/cart">Cart</router-link>
      </li>
    </ul>
    <div class="flex items-center">
      <div class="px-2">{{ $store.state.cart.length }} items</div>
      <div class="border-l border-gray-400 px-2">
        <img src="@/assets/img/shopping-cart.png" alt="" class="w-6" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  methods: {},
};
</script>

<style></style>
