import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      '.lhr.life',
      '.loca.lt',
      '.pinggy-free.link',
      '.pinggy.net',
      'localhost',
      '127.0.0.1'
    ]
  }
});
