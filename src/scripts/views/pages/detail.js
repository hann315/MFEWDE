/* eslint-disable max-len */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantReviewTemplate,
} from '../templates/template-creator';
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

      restaurantContainer.innerHTML += `
        <resto-review>
          <h2>Reviews</h2>
        </resto-review>
      `;

      const restoReview = document.querySelector('resto-review');
      resto.customerReviews.forEach((review) => {
        restoReview.innerHTML += createRestaurantReviewTemplate(review);
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  },
};

export default Detail;
