import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),federation({
    name:'productListing',
    filename:'remoteEntry.js',
    exposes:{
      './ProductListing':'./src/components/FeaturedProducts.jsx'
    },
    shared:["react","react-dom"]

  })],
  server:{
    port:3001,
    cors:true
  },
  preview:{
    port:3001,
    cors:true
  }
})
