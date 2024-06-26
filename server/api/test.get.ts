export default eventHandler(async (event) => {
  try {
    // const response = await $fetch(
    //   "https://www.honorofkings.com/data/heroes.json"
    // )
    const response = await $fetch("https://dummyjson.com/products")

    return { response }
  } catch (error: any) {
    throw createError(error)
  }
})
