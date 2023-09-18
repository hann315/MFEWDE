import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import DATA from '../public/data/DATA.json'

// Hamburger menu
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

function closeDrawer() {
    drawer.classList.remove('open');
}

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', closeDrawer);
main.addEventListener('click', closeDrawer);

// Get Explore Restaurant and do DOM manipulation
const getExploreRestaurant = (data) => {
    const restaurantList = document.getElementById('explore-restaurant-list');
    const restaurantHTML = data.restaurants.map(restaurant => `
        <article tabindex="0" class="card">
            <div class="card-img-container">
                <img class="card-image" alt="${restaurant.name}" src="${restaurant.pictureId}"/>
                <span class="card-rating">
                    <i title="ratings" class="fa fa-star"></i>
                    <span>${restaurant.rating}</span>
                </span>
            </div>
            <div class="card-content">
                <p class="card-content-title">${restaurant.name}, ${restaurant.city}</p>
                <p class="card-content-title-description">Description: </p>
                <p class="card-content-description">${restaurant.description}</p>
            </div>
        </article>
    `).join('');
    restaurantList.innerHTML = restaurantHTML;
}

getExploreRestaurant(DATA);
