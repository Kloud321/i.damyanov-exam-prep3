const { test, expect } = require('@playwright/test');

test('Check movies page', async ({ page }) => {
    await page.goto('http://i-damyanov-exam-prep3-softuni.onrender.com/movies');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  