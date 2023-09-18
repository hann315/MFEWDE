import RestaurantDbSource from '../../data/restaurant-source';
import {
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="content">
            <h2 class="content__heading">Explore Restaurants</h2>
            <div id="resto-list" class="resto-list">
            </div>
        </div>
    `;
  },

  async afterRender() {
    try {
      const mainContent = await RestaurantDbSource.listRestaurant();
      const contentContainer = document.querySelector('#resto-list');

      if (mainContent.length === 0) {
        contentContainer.innerHTML = '<p>No restaurants available.</p>';
        return;
      }

      mainContent.forEach((restaurant) => {
        contentContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      // Handle errors, e.g., show an error message to the user.
      console.error('An error occurred:', error);
    }
  },
};

export default Home;
