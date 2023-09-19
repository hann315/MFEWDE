import Swal from 'sweetalert2';
import RestaurantSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';

const PostReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputReviewName = document.getElementById('inputName');
  const inputReview = document.getElementById('inputReview');
  const reviewContainer = document.querySelector('.detail-review');

  const dataInput = {
    id: url.id,
    name: inputReviewName.value,
    review: inputReview.value,
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const createReviewItem = (name, date, review) => `
    <div class="detail-review-item">
      <div class="header-review">
        <p class="name-review">${name}</p>
        <p class="date-review">${date}</p>
      </div>
      <div class="body-review">${review}</div>
    </div>
  `;

  if (dataInput.name !== '' && dataInput.review !== '') {
    await RestaurantSource.postReview(dataInput);
    const dateFormatted = formatDate(new Date());
    // eslint-disable-next-line max-len
    const newReview = createReviewItem(dataInput.name, dateFormatted, dataInput.review);
    reviewContainer.innerHTML += newReview;
    inputReviewName.value = '';
    inputReview.value = '';

    // Show success toast
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Review has been added.',
      toast: true, // Set to true to display it as a toast
      position: 'bottom-end', // Customize the toast position
      showConfirmButton: false, // Hide the confirmation button
      timer: 2000, // Automatically close the toast after 2 seconds
      timerProgressBar: true, // Show the progress bar
      customClass: {
        container: 'small-toast-container', // Customize the container class
      },
    });
  } else {
    // Show warning toast
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please complete all fields.',
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      customClass: {
        container: 'small-toast-container',
      },
    });
  }
};

export default PostReview;
