import {createRestaurantItemTemplate} from '../../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
      <div class="content">
        <h2 class="content__heading">Favorite Restaurant</h2>
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
    return `
      <div class="resto-item__not__found empty">
        <img class="empty-thumb" src="./images/empty/empty.jpg" alt="">
        <h1 class="empty">
          We are feeling unloved.<br>
          Back to <a href="#/" class="empty">homepage</a> and find your favorites!
        </h1>
      </div>
    `;
  }
}

export default FavoriteRestoSearchView;
