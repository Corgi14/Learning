import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AddLogo from './src/plugins/addlogo'
import RemoveConsole from './src/plugins/removeconsole'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    AddLogo(), 
    RemoveConsole()
  ],
})
