<script setup lang="ts">
  const getPageFromRoute = () => {
    const route = useRoute()
    return parseInt(route.query.page as string) || 1
  }
  const currentPage = computed({
    get: () => getPageFromRoute(),
    set: (v) => navigateTo({ query: { page: v } }),
  })

  const { data, pending } = useAsyncData(
    "products",
    () =>
      db.product.findMany({
        page: currentPage.value,
      }),
    {
      watch: [currentPage],
    }
  )
  const products = computed(() => data.value?.products || [])
  const total = computed(() => data.value?.total || 0)

  const isFirstPage = computed(() => currentPage.value === 1)
  const isLastPage = computed(
    () => currentPage.value === Math.ceil(total.value / 50)
  )
</script>

<template>
  <div>
    <div class="sticky top-0 z-10 flex items-center p-4 bg-white shadow">
      <h1 class="text-2xl font-bold">Semua Produk</h1>
    </div>
    <section class="flex flex-col gap-6 max-w-7xl mx-auto p-6">
      <header class="flex flex-col gap-6">
        <div class="flex items-center justify-between">
          <button
            class="rounded-l-lg border border-gray-300 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200"
            :disabled="isFirstPage"
            @click="currentPage -= 1"
          >
            Sebelumnya
          </button>
          <span class="text-sm text-gray-500">
            Halaman {{ currentPage }} dari {{ Math.ceil(total / 50) }}
          </span>
          <button
            class="rounded-r-lg border border-gray-300 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200"
            :disabled="isLastPage"
            @click="currentPage += 1"
          >
            Selanjutnya
          </button>
        </div>
      </header>

      <div
        v-if="pending"
        class="flex items-center justify-center min-h-[483px]"
      >
        <div
          class="flex items-center justify-center w-12 h-12 border-b-2 border-gray-300 rounded-full border-t-2 border-r-2 animate-spin"
        ></div>
      </div>

      <ProductList v-else :products="products" />
    </section>
  </div>
</template>

<style></style>
