const DrawerInitiator = {
  init({button, drawer, content}) {
    if (!button || !drawer || !content) {
      console.error('One or more required elements are missing.');
      return;
    }

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    // Close the drawer when the Escape key is pressed
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this._closeDrawer(event, drawer);
      }
    });

    // Close the drawer when a click occurs outside the drawer
    document.addEventListener('click', (event) => {
      if (!drawer.contains(event.target)) {
        this._closeDrawer(event, drawer);
      }
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
