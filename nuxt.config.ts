// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  ssr: false,
  tailwindcss: {
    configPath: "~/tailwind.config.ts",
    cssPath: "~/assets/css/style.css",
  },
  runtimeConfig: {
    public: {
      evermuzicApi:
        process.env.EVERMUZIC_API || "https://api.evermuzic.me/api/v1",
      spotifyApi: process.env.SPOTIFY_API || "https://api.spotify.com/v1",
      youtubeApi:
        process.env.YOUTUBE_API ||
        "https://youtube-api-tharindu-nimeshs-projects.vercel.app/api",
    },
  },
});
