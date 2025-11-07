const { I } = inject();

Feature('GoogleTest');

Scenario('test something', async ({ I }) => {
  await I.amOnPage('http://google.com/ncr');
  await I.seeInTitle('Google');
});


 