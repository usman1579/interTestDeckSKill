import { device, element, by, expect } from 'detox';

describe('Launch Screen and API Test', () => {

  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display activity indicator on launch screen and make API call', async () => {
    // Wait for the activity indicator to be displayed on the launch screen
    await expect(element(by.id('activityIndicator'))).toBeVisible();

    // Make the API call to NASA NEO API
    const response = await fetch(
      'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY'
    );
    const data = await response.json();

    // Verify the API response
    expect(response.status).toEqual(200);
    expect(data).toBeDefined();
    expect(data.near_earth_objects).toBeDefined();
    expect(data.near_earth_objects['2015-09-07']).toBeDefined();
    expect(data.near_earth_objects['2015-09-08']).toBeDefined();
  });
});
