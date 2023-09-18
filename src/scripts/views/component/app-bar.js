/* eslint-disable max-len */
class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav id="nav" class="menu">
        <h1>
          <a href="/" title="Navbar Brand">HangryBites</a>
        </h1>
        <button class="menu-button" title="Toggle Menu" aria-label="Toggle Menu">
          <i class="fa fa-times"></i>
          <i class="fa fa-bars"></i>
        </button>
        <ul class="menu-list">
          <li><a href="#" title="Link to Home Page">Home</a></li>
          <li><a href="#/favorite" title="Link to Favorite Page">Favorite</a></li>
          <li><a href="https://www.linkedin.com/in/fafr/" target="_blank" rel="noreferrer noopener" title="Link to LinkedIn">About Us</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-bar', Appbar);
