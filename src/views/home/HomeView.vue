<script setup lang="ts">
import Header from "@/components/Header.vue";
import { Bell } from "@element-plus/icons-vue";
import Statistic from "./components/Statistic.vue";
import DashboardChart from "./components/DashboardChart.vue";
</script>

<template>
  <Header>
    <div>
      <p class="text-2xl font-bold">Hello Everyone</p>
      <small class="text-slate-400">Lets check data today</small>
    </div>
  </Header>
  <section id="main" class="mt-5 w-full flex flex-col gap-4">
    <Statistic />
    <DashboardChart />
  </section>
</template>
