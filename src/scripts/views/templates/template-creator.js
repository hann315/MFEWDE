/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="resto-item">
    <div class="resto-header">
      <img class="resto-image" alt="Picture of ${restaurant.name}"
           src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}">
      <div class="resto-rating">
        <p>⭐️<span class="resto-rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="resto-info">
      <h3 class="resto-name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <h4 class="resto-city">${restaurant.city}</h4>
      <p class="resto-description">${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="content__heading">${restaurant.name} Detail</h2>
<div class="detail">
    <img class="lazyload" src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}" alt="Picture of ${restaurant.name}" />

    <div class="info">
      <h2>Information</h2>
      <ul>
        <li>
          <h3>Kota</h3>
          <p>${restaurant.city}</p>
        </li>
        <li>
          <h3>Alamat</h3>
          <p>${restaurant.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${restaurant.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <span id="food">
          <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <span id="drink">
            <p>${restaurant.menus.drinks.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="overview">
      <h2>Overview</h2>
      <p>${restaurant.description}</p>
    </div>

  </div>
  
`;

const createRestaurantReviewTemplate = (reviews) => `
  <div class="review">
    <p><span class="name">${reviews.name}</span></p>
    <p><span class="date">${reviews.date}</span></p>
    <p>${reviews.review}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
