import { test, expect } from '@playwright/test';

test.describe('Game detail descriptions', () => {
  test('shows category and publisher descriptions when present', async ({ page }) => {
    await test.step('Open a seeded game detail page', async () => {
      await page.goto('/game/1');
      await expect(page.getByTestId('game-details')).toBeVisible();
    });

    await test.step('Verify the descriptive sections are visible and populated', async () => {
      const infoBlock = page.getByTestId('game-details-related-info');
      const categoryInfo = page.getByTestId('game-category-description');
      const publisherInfo = page.getByTestId('game-publisher-description');

      await expect(infoBlock).toBeVisible();
      await expect(categoryInfo).toBeVisible();
      await expect(publisherInfo).toBeVisible();
      await expect(page.getByTestId('game-category-description-text')).not.toBeEmpty();
      await expect(page.getByTestId('game-publisher-description-text')).not.toBeEmpty();
    });
  });
});
