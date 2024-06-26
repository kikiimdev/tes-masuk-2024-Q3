<script setup lang="ts">
  import type { Product } from "~/utils/db"

  const { id } = useRoute().params
  const router = useRouter()

  const { data, status } = useAsyncData(`product-${id.toString()}`, () =>
    db.product.findUnique(id.toString())
  )
  const pending = computed(() => status.value === "pending")

  const product = computed(() => data.value as Product)
</script>

<template>
  <div
    v-if="pending"
    class="flex min-h-[calc(100vh-4rem)] items-center justify-center"
  >
    <div
      class="flex items-center justify-center w-12 h-12 border-b-2 border-gray-300 rounded-full border-t-2 border-r-2 animate-spin"
    ></div>
  </div>

  <div v-else class="flex flex-col">
    <div class="sticky top-0 z-10 flex gap-3 items-center p-4 bg-white shadow">
      <button @click="router.back()" class="text-gray-500 -mb-1">
        <Icon name="mdi:chevron-left" class="w-6 h-6" />
      </button>
      <h1 class="text-2xl font-bold">{{ product.title }}</h1>
    </div>

    <div class="flex flex-col gap-6 max-w-7xl mx-auto p-6">
      <div class="flex flex-col gap-6">
        <div
          class="w-full max-h-[40vh] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 min-w-[358px] min-h-[358px] sm:flex sm:flex-row sm:gap-4"
        >
          <template v-for="image in product.images" :key="image">
            <div
              class="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200"
            >
              <img :src="image" class="object-cover w-full h-full rounded-lg" />
              <div
                class="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-200 flex justify-center items-center"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </template>
        </div>

        <div class="w-full">
          <div
            class="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg"
          >
            <h1 class="text-2xl font-bold">{{ product.title }}</h1>
            <p class="text-lg font-semibold">Rp. {{ product.price }}</p>
          </div>
          <p class="mt-4 text-lg">{{ product.description }}</p>
          <div class="flex flex-wrap gap-2 mt-4">
            <div
              v-for="tag in product.tags"
              :key="tag"
              class="rounded-full px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800"
            >
              {{ tag }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h2 class="text-2xl font-bold mb-4">Reviews</h2>
        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div
            v-for="review in product.reviews"
            :key="review.reviewerEmail"
            class="p-4 bg-white border border-gray-200 rounded-lg"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <img
                  class="w-6 h-6 rounded-full object-cover"
                  src="https://via.placeholder.com/64x64"
                  alt="Avatar"
                />
                <h3 class="text-sm font-medium">{{ review.reviewerName }}</h3>
              </div>
              <p class="text-sm text-gray-500">
                {{ new Date(review.date).toLocaleDateString("id-ID") }}
              </p>
            </div>

            <p class="mt-2 text-sm">{{ review.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
