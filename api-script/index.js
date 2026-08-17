const assert = require('assert');

(async function () {
    const urls = [
        'https://www.google.com',
        'https://www.wikipedia.org',
        'https://www.github.com',
        'https://www.cloudflare.com',
        'https://www.ibm.com'
    ];

    for (const url of urls) {
        const response = await $got.get(url);

        assert.equal(
            response.statusCode,
            200,
            'Expected 200, current status is ' + response.statusCode
        );
    }
})();
