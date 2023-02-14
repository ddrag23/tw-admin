<script lang="ts" setup>
import { HomeFilled, Menu, User } from "@element-plus/icons-vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <div
    class="bg-white w-full h-16 px-6 py-2 flex justify-between text-gray-font fixed bottom-0 shadow-lg z-40 border-t border-gray-99 md:hidden"
  >
    <RouterLink to="/">
      <span
        class="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm flex flex-col items-center text-center text-primary"
      >
        <el-icon class="w-8 p-1" size="25">
          <HomeFilled />
        </el-icon>
        <span class="mx-1 font-roboto">Home</span>
      </span>
    </RouterLink>
    <RouterLink to="/">
      <span
        class="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm flex flex-col items-center text-center"
      >
        <el-icon class="w-8 p-1" size="25">
          <Menu />
        </el-icon>
        <span class="mx-1 font-roboto">Menu</span>
      </span>
    </RouterLink>
    <RouterLink to="/">
      <span
        class="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm flex flex-col items-center text-center"
      >
        <el-icon class="w-8 p-1" size="25">
          <User />
        </el-icon>
        <span class="mx-1 font-roboto">Akun</span>
      </span>
    </RouterLink>
  </div>
</template>
