module.exports = {
  // Add your Next.js configuration options here
  env: {
    storyblokApiToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
      }
    ]
  }
}
