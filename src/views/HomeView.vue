<script setup lang="ts">
import Header from "@/components/Header.vue";
import { Bell } from "@element-plus/icons-vue";
</script>

<template>
  <Header>
    <div>
      <p class="text-2xl font-bold">Hello Everyone</p>
      <small class="text-slate-400">Lets check data today</small>
    </div>
    <template #toolbar>
      <el-button :icon="Bell" size="large" circle />
    </template>
  </Header>
</template>
