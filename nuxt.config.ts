// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', '@nuxtjs/apollo', '@storyblok/nuxt'],

  image: {
    domains: ['mdbootstrap.com', 'cdn.shopify.com']
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.SHOPIFY_STOREFRONT_HOST,
        httpLinkOptions: {
          headers: {
            'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
          },
        }
      }
    },
  },

  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN
  }
})
