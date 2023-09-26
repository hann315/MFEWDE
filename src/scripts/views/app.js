import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import Swal from 'sweetalert2/dist/sweetalert2.all.min';

class App {
  constructor({button, drawer, content}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._initAppShell();
  }

  _initAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];

      const pageContent = await page.render();
      this._content.innerHTML = pageContent;

      await page.afterRender();
    } catch (error) {
      this._handleError(error);
    }
  }

  _handleError(error) {
    Swal.fire({
      title: 'An error occurred',
      text: error,
      icon: 'error',
      footer: 'Back to <a href="/#">homepage</a>',
    });
  }
}

export default App;
