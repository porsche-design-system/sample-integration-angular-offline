import { expect, test } from '@playwright/test';

test.describe('Integrity checks', () => {
  test('should have a title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Angular');
  });

  test('should serve all requests from localhost', async ({page}) => {
    const networkRequests: string[] = [];

    page.on('request', (request) => {
      networkRequests.push(request.url());
    });

    await page.goto('/', {waitUntil: 'networkidle'});

    const nonLocalhostRequests = networkRequests.filter(url => !url.startsWith('http://localhost') && !url.startsWith('https://localhost'));

    expect(nonLocalhostRequests.length, `Expected all requests to be from localhost, but found non-localhost requests:\n${nonLocalhostRequests.join('\n')}`).toBe(0);
  });

  test('should load all requests successfully', async ({ page }) => {
    const failedRequests: string[] = [];

    page.on('requestfailed', (request) => {
      failedRequests.push(`${request.url()} (${request.failure()?.errorText})`);
    });
    page.on('response', (response) => {
      if (response.status() >= 400) {
        failedRequests.push(`${response.url()} (${response.status()})`);
      }
    });

    await page.goto('/', { waitUntil: 'networkidle' });

    expect(failedRequests, `Expected all requests to succeed, but found failed requests:\n${failedRequests.join('\n')}`).toEqual([]);
  });

  test('should hydrate Porsche Design System components', async ({ page }) => {
    await page.goto('/');

    for (const tagName of ['p-wordmark', 'p-button', 'p-flag']) {
      await expect(page.locator(`${tagName}.hydrated`)).toHaveCount(1);
    }
  });
});
