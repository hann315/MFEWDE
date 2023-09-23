const DrawerInitiator = {
  init({button, drawer, content}) {
    if (!button || !drawer || !content) {
      console.error('One or more required elements are missing.');
      return;
    }

    button.addEventListener('click', (event) => this._toggleDrawer(event, drawer));
    content.addEventListener('click', (event) => this._closeDrawer(event, drawer));
    document.addEventListener('keydown', (event) => this._handleDocumentKeyDown(event, drawer));
    document.addEventListener('click', (event) => this._handleDocumentClick(event, drawer));
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _handleDocumentKeyDown(event, drawer) {
    if (event.key === 'Escape') {
      this._closeDrawer(event, drawer);
    }
  },

  _handleDocumentClick(event, drawer) {
    if (!drawer.contains(event.target)) {
      this._closeDrawer(event, drawer);
    }
  },
};

export default DrawerInitiator;
