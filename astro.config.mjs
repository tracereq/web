import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import netlify from '@astrojs/netlify/functions';
import partytown from "@astrojs/partytown";


// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  integrations: [
  tailwind(),
  partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"],
    }
  }),
  ],
  output: "server",
  adapter: netlify()
});