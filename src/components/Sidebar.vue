<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { useMenu } from "@/stores/menu";

const route = useRoute();
const { mainMenu } = useMenu();
function subIsActive(name: string) {
  return route.path.split("/")[1] == name;
}
</script>
<template>
  <section class="w-1/5 bg-white p-5 h-screen hidden md:block overflow-auto">
    <h1 class="text-2xl font-bold text-center mt-5 mb-12">TheDashboard</h1>
    <p class="text-gray-400 mb-5">Main Menu</p>
    <nav class="w-full flex flex-col gap-2">
      <template v-for="(item, index) in mainMenu" :key="index">
        <RouterLink
          :to="{ name: item.name }"
          class="p-2 text-slate-400 w-full rounded-lg"
          :class="{
            active: $route.name == item.name || subIsActive(item.name),
          }"
        >
          <font-awesome-icon :icon="item.icon"></font-awesome-icon>
          <span class="ml-2">{{ item.title }}</span>
        </RouterLink>
      </template>
      <!-- <RouterLink to="/user" class="p-2 text-slate-400">
        <font-awesome-icon icon="fa-solid fa-users"></font-awesome-icon>
        <span class="ml-2">User</span>
      </RouterLink>
      <RouterLink to="/transaksi" class="p-2 text-slate-400">
        <font-awesome-icon icon="fa-solid fa-money-bill" />
        <span class="ml-2">Transaksi</span>
      </RouterLink> -->
    </nav>
  </section>
</template>
<style scoped lang="postcss">
.active {
  @apply bg-blue-700 text-white;
}
</style>
