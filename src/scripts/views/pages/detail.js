/* eslint-disable max-len */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
} from '../templates/template-creator';
import PostReview from '../../utils/postReviewInitiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="resto" class="resto"></div>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const resto = await RestaurantDbSource.detailRestaurant(url.id);

      const restaurantContainer = document.querySelector('#resto');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(resto);

      const likeButtonContainer = document.querySelector('#likeButtonContainer');
      LikeButtonInitiator.init({
        likeButtonContainer,
        resto: {
          id: resto.id,
          name: resto.name,
          city: resto.city,
          description: resto.description,
          pictureId: resto.pictureId,
          rating: resto.rating,
        },
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }

    const submitReview = document.getElementById('submit-review');
    submitReview.addEventListener('click', (event) => {
      event.preventDefault();
      PostReview();
    });

    const left = document.querySelector('#left-btn');
    const right = document.querySelector('#right-btn');
    const left2 = document.querySelector('#left-btnn');
    const right2 = document.querySelector('#right-btnn');
    const menuDrink = document.querySelector('#drink');
    const menuFood = document.querySelector('#food');

    left.addEventListener('click', () => {
      menuDrink.scrollBy(-100, 0);
    });

    right.addEventListener('click', () => {
      menuDrink.scrollBy(100, 0);
    });

    left2.addEventListener('click', () => {
      menuFood.scrollBy(-100, 0);
    });

    right2.addEventListener('click', () => {
      menuFood.scrollBy(100, 0);
    });
  },
};

export default Detail;
