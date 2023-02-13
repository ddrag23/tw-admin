<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="w-1/5 bg-white p-5 h-screen hidden md:block">
    <h1 class="text-2xl font-bold text-center mt-5 mb-12">TheDashboard</h1>
    <p class="text-gray-400 mb-5">Main Menu</p>
    <nav class="w-full flex flex-col gap-2">
      <RouterLink to="/" class="p-2 bg-blue-700 text-white w-full rounded-lg">
        <font-awesome-icon icon="fa-solid fa-gauge"></font-awesome-icon>
        <span class="ml-2">Dashboard</span>
      </RouterLink>
      <RouterLink to="/user" class="p-2 text-slate-400">
        <font-awesome-icon icon="fa-solid fa-users"></font-awesome-icon>
        <span class="ml-2">User</span>
      </RouterLink>
    </nav>
  </section>
</template>
