const assert = require('assert').strict;

(async function () {
  // Open first web page
  console.log('Opening Google');
  await $browser.get('https://www.google.com');
  console.log('Page 1 title:', await $browser.getTitle());

  // Open second web page
  console.log('Opening Wikipedia');
  await $browser.get('https://www.wikipedia.org');
  console.log('Page 2 title:', await $browser.getTitle());

})();
