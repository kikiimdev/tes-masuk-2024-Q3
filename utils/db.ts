export type Product = {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
  }[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
  thumbnail: string
  images: string[]
}

const base = "https://dummyjson.com"

export const db = {
  product: {
    findMany: async (opts: { page: number } = {} as any) => {
      const { page = 1 } = opts
      const limit = 50
      const skip = (page - 1) * limit
      const response = await $fetch(
        `${base}/products?limit=${limit}&skip=${skip}`
      )
      return response as { products: Product[]; total: number }
    },
    findUnique: async (id: string) => {
      const response = await $fetch(`${base}/products/${id}`)
      return response as Product
    },
  },
}
