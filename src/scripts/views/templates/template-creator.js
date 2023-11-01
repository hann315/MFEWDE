/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="resto-item">
    <div class="resto-header">
      <img class="resto-image lazyload" alt="Picture of ${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="resto-rating">
        <p><i class="fa fa-star"></i><span>${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="resto-info">
      <h3 class="resto-title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <h4 class="resto-city">${restaurant.city}</h4>
      <p class="resto-description">${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="content__heading resto-title">${restaurant.name} Detail</h2>
<div class="detail">
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Picture of ${restaurant.name}" />
    <div class="overview">
      <h2>Overview</h2>
      <p>${restaurant.description}</p>
    </div>
    <div class="info">
      <h2>Information & Menu</h2>
      <ul>
        <li>
          <i class="fa-solid fa-star fa-xl"></i>
          <span>${restaurant.rating}</span>
        </li>
        <li>
          <i class="fa-solid fa-house fa-xl"></i>
          <span>${restaurant.address}, ${restaurant.city}</span>
        </li>
        <li>
         <i class="fa-solid fa-book fa-xl"></i>
          <span>${restaurant.categories.map((category) => category.name).join(', ')}</span>
        </li>
      </ul>
      
      <div class="detail-menu">
      <ul class="drink"> 
      <h4 class="menu-titel" tabindex="0"> Drink </h4>
                <div class="menu-wrap">
                <button class="left" id="left-btn"><</button>
                  <div class="menu-container" id="drink">
                    ${restaurant.menus.drinks.map((drink) => `
                      <li class="menu-items" tabindex="0"><p>${drink.name}</p></li>
                    `).join('')}
                  </div>
                <button class="right" id="right-btn">></button>
                </div> 
        </ul>
        <ul class="food"> 
        <h4 class="menu-titel" tabindex="0"> Food </h4>
                  <div class="menu-wrap">
                  <button class="left" id="left-btnn"><</button>
                    <div class="menu-container" id="food">
                      ${restaurant.menus.foods.map((food) => `
                        <li class="menu-items" tabindex="0"><p>${food.name}</p></li>
                      `).join('')}
                    </div>
                  <button class="right" id="right-btnn">></button>
                </div> 
        </ul>
    </div>
    </div>
  </div>

  <h2 tabindex="0" class="title-review">${restaurant.customerReviews.length} Review(s)</h2>

  <div class="container-review">
      <div tabindex="0" class="detail-review">
        ${restaurant.customerReviews.map((review) => `
            <div class="detail-review-item">
              <div class="header-review">
                <p class="name-review">${review.name}</p>
                <p class="date-review">${review.date}</p>
              </div>
              <div class="body-review">
                ${review.review}
              </div>
            </div>
          `).join('')}
      </div>
      <div class="form-review">
      <h1><span>Post your review!</span></h1>
      <form>
        <div class="form-content">
          <input name="inputName" type="text" class="form-control" id="inputName" placeholder="Name">
        </div>
        <div class="form-content">
          <input name="inputReview" type="text" class="form-control" id="inputReview" placeholder="Your Review">
        </div>
        <button id="submit-review" type="submit" class="btn">Submit</button>
      </form>
    </div>
  </div>
  
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa-regular fa-heart fa-beat"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa-solid fa-heart fa-beat"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
