import FavoriteRestoIdb from '../data/favorite-resto-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({likeButtonContainer, favoriteRestaurants, resto}) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurants = favoriteRestaurants;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._resto;
    const isRestoExist = await this._isRestoExist(id);

    if (isRestoExist) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    this._attachLikeButtonListener(async () => {
      await FavoriteRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    this._attachLikeButtonListener(async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },

  _attachLikeButtonListener(callback) {
    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    likeButton.addEventListener('click', callback);
  },
};

export default LikeButtonInitiator;
