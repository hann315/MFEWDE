import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async fetchData(url, options = {}) {
    try {
      const response = await axios(url, options);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async listRestaurant() {
    const url = API_ENDPOINT.LIST;
    return this.fetchData(url).then((responseJson) => responseJson.restaurants);
  }

  static async detailRestaurant(id) {
    const url = API_ENDPOINT.DETAIL(id);
    return this.fetchData(url).then((responseJson) => responseJson.restaurant);
  }

  static async postReview(data) {
    const url = API_ENDPOINT.POST_REVIEW;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    };

    return this.fetchData(url, options);
  }
}

export default RestaurantDbSource;
