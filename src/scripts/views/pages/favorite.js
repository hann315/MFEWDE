/* eslint-disable max-len */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import {
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurants</h2>
        <div class="empty" id="empty"></div>
        <div id="resto-list" class="resto-list"></div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const restos = await FavoriteRestoIdb.getAllResto();
      const restosContainer = document.querySelector('#resto-list');
      const empty = document.querySelector('#empty');

      if (restos.length === 0) {
        empty.innerHTML = `
          <img class="empty-thumb" src="./images/empty/empty.jpg" alt="">
          <h1>There is no data yet, <a href="#/">go to homepage</a></h1>
        `;
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
