const { I } = inject();

Feature('Android Google Test');

Scenario('test google search on android device', async ({ I }) => {
  await I.amOnPage('https://www.google.com');
  await I.waitForElement('textarea[name="q"]', 10);
  await I.seeInTitle('Google');
  await I.fillField('textarea[name="q"]', 'LambdaTest');
  await I.wait(2);
});