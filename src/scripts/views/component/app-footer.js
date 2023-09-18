class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>&copy; 2023 HangryBites. All rights reserved.</p>
        <p>with 💙 by FAFR</p>
    `;
  }
}

customElements.define('app-footer', Footer);
