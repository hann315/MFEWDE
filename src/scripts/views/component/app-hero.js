/* eslint-disable max-len */
class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
        <div class="hero-image"></div>
        <div class="hero-description">
        <h2 tabindex="0">Welcome to <span>HangryBites</span></h2>
        <p tabindex="0">Bite into Happiness with HangryBites!</p>
        </div>
    </div>
      `;
  }
}

customElements.define('app-hero', AppHero);
