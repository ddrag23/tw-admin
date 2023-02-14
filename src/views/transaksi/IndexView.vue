<script setup lang="ts">
import { RouterView, useRouter, useRoute } from "vue-router";
import { useMenu } from "@/stores/menu";
const router = useRouter();
const route = useRoute();
const { transaksiSideMenu } = useMenu();
function toRoute(path: string) {
  router.push({ name: path });
}
</script>
<template>
  <Header>
    <div>
      <p class="text-2xl font-bold">Transaction</p>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="/">Transaction Management</a></el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
  </Header>
  <section class="grid grid-cols-4 gap-4 mt-10">
    <div class="w-full">
      <el-card class="col-span-1" shadow="never">
        <template v-for="(item, index) in transaksiSideMenu" :key="index">
          <hr class="my-2" v-if="index != 0" />
          <div
            class="p-2 w-full text-start cursor-pointer"
            @click="toRoute(item.name)"
            :class="{ 'side-active': $route.name == item.name }"
          >
            {{ item.title }}
          </div>
        </template>
      </el-card>
    </div>
    <div class="col-span-3">
      <RouterView />
    </div>
  </section>
</template>
<style lang="postcss" scoped>
.side-active {
  @apply bg-blue-700 text-white rounded;
}
</style>
