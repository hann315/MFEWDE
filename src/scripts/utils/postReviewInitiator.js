import Swal from 'sweetalert2/dist/sweetalert2.all.min';
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

  if (isValidInput(dataInput)) {
    try {
      await RestaurantSource.postReview(dataInput);
      const dateFormatted = formatDate(new Date());
      const newReview = createReviewItem(dataInput.name, dateFormatted, dataInput.review);
      appendReviewToContainer(reviewContainer, newReview);
      clearInputFields(inputReviewName, inputReview);
      showSuccessToast();
    } catch (error) {
      showErrorToast('An error occurred while posting the review');
    }
  } else {
    showWarningToast('Please complete all fields');
  }
};

const isValidInput = (dataInput) => {
  return dataInput.name !== '' && dataInput.review !== '';
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

const appendReviewToContainer = (container, review) => {
  container.innerHTML += review;
};

const clearInputFields = (inputName, inputReview) => {
  inputName.value = '';
  inputReview.value = '';
};

const showSuccessToast = () => {
  showToast('success', 'Success!', 'Review has been added');
};

const showWarningToast = (message) => {
  showToast('warning', 'Oops...', message);
};

const showToast = (icon, title, text) => {
  Swal.fire({
    icon,
    title,
    text,
    toast: true,
    position: 'bottom-left',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    customClass: {
      container: 'small-toast-container',
    },
  });
};

export default PostReview;
