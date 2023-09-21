import {createRestaurantItemTemplate} from '../../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurants</h2>
        <input id="query" class="search-favorite" type="text" placeholder="Search Restaurant">
        <div id="resto-list" class="resto-list"></div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showResto(restaurants) {
    this.showFavoriteResto(restaurants);
  }

  showFavoriteResto(restaurants = []) {
    const html = restaurants.length ?
      restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '') :
      this._getEmptyRestoTemplate();

    document.getElementById('resto-list').innerHTML = html;

    document.getElementById('resto-list').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestoTemplate() {
    return `<div class="resto-item__not__found">Oops! Your favorites feel unloved.</div>`;
  }
}

export default FavoriteRestoSearchView;
