const assert = require('assert');
// eslint-disable-next-line no-unused-vars
const {async} = require('regenerator-runtime');

Feature('Liking Restaurants');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({I}) => {
  I.seeElement('#query');
  I.see('We are feeling unloved. Back to homepage and find your favorites!', '.resto-item__not__found');
});

Scenario('liking one resto', async ({I}) => {
  I.see('We are feeling unloved. Back to homepage and find your favorites!', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto-name a');

  const firstResto = locate('.resto-name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedRestoTitle = await I.grabTextFrom('.resto-name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unliking one resto', async ({I}) => {
  I.see('We are feeling unloved. Back to homepage and find your favorites!', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto-name a');

  const firstResto = locate('.resto-name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item a');
  const firstLikedResto = locate('.resto-name a').first();
  const firstLikedRestoTitle = await I.grabTextFrom(firstLikedResto);

  assert.strictEqual(firstRestoTitle, firstLikedRestoTitle);

  I.click(firstLikedResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('We are feeling unloved. Back to homepage and find your favorites!', '.resto-item__not__found');
});
