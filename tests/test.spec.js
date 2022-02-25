const { test, expect } = require('@playwright/test');

test.describe('New Todo', () => {

    test.skip('basic test', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright');
    });
})