<script setup lang="ts">
import { Bell } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <button
        type="button"
        id="navbar-button"
        class="text-black font-medium text-sm px-2.5 text-center inline-flex items-center mr-2 md:hidden block"
        @click="$emit('toggleSidebar', true)"
      >
        <font-awesome-icon icon="fa-solid fa-bars" class="text-2xl" />
      </button>
      <div v-if="route.path == '/'">
        <p class="text-2xl font-bold">Hello Everyone</p>
        <small class="text-slate-400">Lets check data today</small>
      </div>
      <div v-else>
        <p class="md:text-2xl text-xl font-bold">{{ route.meta.title }}</p>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item
            ><a href="/">{{ route.meta.breadcrumb }}</a></el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>

    <div class="flex gap-4">
      <el-button :icon="Bell" size="large" />

      <slot name="toolbar" />
    </div>
  </div>
</template>
