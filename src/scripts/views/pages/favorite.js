/* eslint-disable max-len */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import {
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Favorite Restaurant</h2>
        <div id="resto-list" class="resto-list"></div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const restos = await FavoriteRestoIdb.getAllResto();
      const restosContainer = document.querySelector('#resto-list');

      if (restos.length === 0) {
        restosContainer.innerHTML = '<p class="no-liked">No favorite restaurants added.</p>';
        return;
      }

      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestaurantItemTemplate(resto);
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  },
};

export default Favorite;
