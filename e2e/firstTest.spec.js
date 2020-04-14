describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the welcome message', async () => {
    await expect(element(by.id('episode-list'))).toBeVisible();
  });
});
