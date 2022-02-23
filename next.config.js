const { Domain } = require('@material-ui/icons')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
    images: {
      domains: ['openweathermap.org'],
    },
  }

module.exports = nextConfig
