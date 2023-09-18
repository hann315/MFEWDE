import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './views/component/app-bar';
import './views/component/app-hero';
import './views/component/app-footer';
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/fontawesome';
import App from './views/app';
import swRegister from './utils/sw-register';

// DOM elements
const skipToContent = document.querySelector('.skip-to-content');
const mainContent = document.querySelector('#mainContent');

// Initialize the App
const app = new App({
  button: document.querySelector('.menu-button'),
  drawer: document.querySelector('#nav'),
  content: mainContent, // Use the variable directly here for consistency
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
