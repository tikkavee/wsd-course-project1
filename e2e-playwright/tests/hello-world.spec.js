const { test, expect } = require("@playwright/test");


test("Main page has expected title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Shopping Lists");
});

test("Main page has expected headings.", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Shared shopping lists");
});

test("Main page has expected headings.", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h2")).toHaveText("Statistics");
});


test("Can add a shopping list.", async ({ page }) => {
  await page.goto("/lists");
  await page.locator("input[type=text]").type("My new list");
  await page.locator("input[type=submit]").click();
  await expect(page.locator("a")).toHaveText("My new list");
});


test("Main page has expected headings.", async ({ page }) => {
  await page.goto("/lists");
  await expect(page.locator("h1")).toHaveText("Shopping lists");
});

test("Can open a list page.", async ({ page }) => {
  await page.goto("/lists");
  const taskName = `My task: ${Math.random()}`;
  await page.locator("input[type=text]").type(taskName);
  await page.locator("input[type=submit]").click();
  await page.locator(`a >> text='${taskName}'`).click();
  await expect(page.locator("h1")).toHaveText(taskName);
});






