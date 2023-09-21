import {itActsAsFavoriteRestoModel} from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((resto) => resto.id === id);
  },

  getAllResto() {
    return favoriteRestaurants;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestaurants.push(resto);
  },

  deleteResto(id) {
    favoriteRestaurants = favoriteRestaurants.filter((resto) => resto.id !== id);
  },

  searchResto(query) {
    return this.getAllResto()
        .filter((resto) => {
          const loweredCaseRestoTitle = (resto.title || '-').toLowerCase();
          const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');

          const loweredCaseQuery = query.toLowerCase();
          const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

          return jammedRestoTitle.indexOf(jammedQuery) !== -1;
        });
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
