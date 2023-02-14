<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
import BottomNavigation from "@/components/BottomNavigation.vue";
</script>

<template>
  <section class="flex w-full min-h-screen">
    <Sidebar />
    <main class="p-5 md:p-10 w-full">
      <RouterView />
    </main>
    <BottomNavigation />
  </section>
</template>
