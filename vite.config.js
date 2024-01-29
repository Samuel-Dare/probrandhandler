import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  let baseUrl;

  if (mode === 'development') {
    baseUrl = 'http://localhost:3000';
  } else if (mode === 'production') {
    baseUrl = 'https://probrandhandlers.onrender.com';
  }

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_BASE_URL': JSON.stringify(baseUrl),
    },
  };
});
