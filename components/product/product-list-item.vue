<script setup lang="ts">
  import type { Product } from "~/utils/db"

  const props = defineProps<{
    product: Product
  }>()
</script>

<template>
  <!-- product card -->
  <NuxtLink :to="`/produk/${product.id}`" class="group">
    <article
      class="flex flex-col w-full min-h-[483px] bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 transform-gpu transition-all duration-300 ease-out hover:scale-105"
    >
      <div>
        <img
          class="object-cover h-64 w-full group-hover:opacity-75"
          :src="product.thumbnail"
          alt="Converse sneakers"
        />
      </div>

      <div class="flex flex-col gap-1 mt-4 px-4 items-stretch">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-50">
          {{ product.title }}
        </h2>
        <span class="font-normal text-gray-600 dark:text-gray-300">
          {{ product.brand }}
        </span>
        <span class="font-semibold text-gray-800 dark:text-gray-50">
          ${{ product.price }}
        </span>
      </div>

      <div class="flex flex-wrap gap-2 mt-4 px-4 py-2 rounded-lg">
        <template v-for="tag in product.tags" :key="tag">
          <span
            class="px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded-full dark:bg-gray-600 dark:text-gray-50"
          >
            {{ tag }}
          </span>
        </template>
      </div>
      <div class="flex flex-1"></div>

      <div
        class="p-4 border-t border-gray-200 dark:border-gray-500 mt-4 flex-grow-0"
      >
        <button
          class="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50"
        >
          <span class="text-base">Detail Produk</span>
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </article>
  </NuxtLink>
</template>

<style></style>
