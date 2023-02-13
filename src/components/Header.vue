<script setup lang="ts">
import { Bell } from "@element-plus/icons-vue";
</script>
<template>
  <div class="flex justify-between items-center">
    <slot />
    <div class="flex gap-4">
      <el-button :icon="Bell" size="large" />

      <slot name="toolbar" />
    </div>
  </div>
</template>
