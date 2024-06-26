<script setup lang="ts">
  import type { Product } from "~/utils/db"

  const props = defineProps<{
    products: Product[]
  }>()
</script>

<template>
  <ul
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr"
  >
    <li v-for="product in products" :key="product.id">
      <ProductListItem :product="product" />
    </li>
  </ul>
</template>

<style></style>
