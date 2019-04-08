const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        browser.getTitle();
        console.log('example.js :8');
        browser.getTitle();
        browser.pause(5000);
        console.log('example.js :10');
        browser.getTitle();
        browser.getTitle();
        browser.pause(5000);
        browser.getTitle();
        console.log('example.js :14');
        browser.getTitle();
        assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
});