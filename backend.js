import startServer from 'shadow-play/server.mjs';
import App from './src/App.vue';

startServer(3001, [App]);