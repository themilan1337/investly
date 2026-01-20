<script setup lang="ts">
import { toast } from 'vue-sonner'
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="flex items-center">
      <NuxtImg src="/logo.png" class="mr-4 w-12 h-auto animate-spin [animation-duration:10s]" />
      <h1 class="text-3xl font-bold">
        Investly Launch 26"
      </h1>
    </div>
    <Button class="mt-4" @click="() => toast.info('View dashboard/README.md to get started')">Get Started</Button>
  </div>
</template>