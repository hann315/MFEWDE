/* eslint-disable max-len */
import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  try {
    if ('serviceWorker' in navigator) {
      const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

      wb.addEventListener('waiting', () => {
        console.log('New service worker waiting to activate. Please refresh the page.');
      });

      wb.addEventListener('activated', () => {
        console.log('New service worker activated.');
      });

      await wb.register();
      console.log('Service worker registered.');
    }
  } catch (error) {
    console.error('Failed to register service worker:', error);
  }
};

export default swRegister;
