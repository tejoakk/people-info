// @flow
const puppeteer = require('puppeteer');

const containerId = '#section';
const listItem = '#article';

let browser;
let page;

describe('loadPage', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  });
  afterAll(async () => {
    await browser.close();
  });
  describe(' html', () => {
    it('has the container', () => {
      expect(page.$(containerId)).toBeTruthy();
    });
    it('has the script', () => {
      expect(page.$(`${containerId}+script`)).toBeTruthy();
    });
    it('has a global dataLayer', async () => {
      await page.evaluateOnNewDocument(() => {
        expect(window.dataLayer).toBeDefined();
      });
    });
  });
  describe('When the user is filling the search', () => {
      it('sees the results items', async () => {
        await page.type('input','ch');
        expect(page.$(listItem)).toBeTruthy();
        await new Promise(resolve => setTimeout(() => resolve(), 1000));

      }, 40000);
    });
});
