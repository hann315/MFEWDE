Feature('Add Restaurant Review');

Before(({I}) => {
  I.amOnPage('/#');
});

Scenario('success to add restaurant review', async ({I}) => {
  I.waitForElement('.resto-item a', 10);
  I.seeElement('.resto-item a');

  const firstRestaurant = locate('.resto-item a').first();
  const firstRestaurantId = (await I.grabAttributeFrom(firstRestaurant, 'href'))
      .split('/')
      .at(-1);
  I.click(firstRestaurant);

  I.waitForElement('.form-review', 5);
  I.seeElement('.form-review');

  const name = 'Jang Wonyoung';
  const reviewText = 'Imma baddie';
  I.fillField('#inputName', name);
  I.fillField('#inputReview', reviewText);
  I.click('.btn');
  I.seeTextEquals('Success!', '.swal2-title');
  I.seeTextEquals('Review has been added', '.swal2-html-container');

  I.sendGetRequest(`/detail/${firstRestaurantId}`);
  I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(['restaurant']);
  I.seeResponseContainsJson({
    restaurant: {customerReviews: [{name, review: reviewText}]},
  });
});

Scenario('failed to add restaurant review', async ({I}) => {
  I.waitForElement('.resto-item a', 10);
  I.seeElement('.resto-item a');

  const firstRestaurant = locate('.resto-item a').first();
  I.click(firstRestaurant);

  I.waitForElement('.form-review', 5);
  I.seeElement('.form-review');

  I.click('.btn');

  I.seeTextEquals('Oops...', '.swal2-title');
  I.seeTextEquals('Please complete all fields', '.swal2-html-container');
});
