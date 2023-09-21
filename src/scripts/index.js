import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './views/component/app-bar';
import './views/component/app-hero';
import './views/component/app-footer';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

// DOM elements
const skipToContent = document.querySelector('.skip-to-content');
const button = document.querySelector('.menu-button');
const drawer = document.querySelector('#nav');
const mainContent = document.querySelector('#mainContent');

// Initialize the App
const app = new App({
  button: button,
  drawer: drawer,
  content: mainContent,
});

// Event listeners
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

skipToContent.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.focus();
});
