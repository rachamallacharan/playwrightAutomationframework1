// Generated from: tests\Features\itemtocart.feature
import { test } from "../../../tests/Fixtures/fixtures.js";

test.describe('booking product', () => {

  test('adding product to cart', async ({ Given, When, Then, And, AddProduct, page }) => { 
    await Given('User launches application', null, { page }); 
    await When('User enters application "standard_user" and "secret_sauce"', null, { page }); 
    await And('click on login button', null, { page }); 
    await Then('user should be navigated to homepage', null, { page }); 
    await When('user added product to cart', null, { AddProduct }); 
    await Then('user clicks on cart icon', null, { AddProduct }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\itemtocart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters application \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":24,"value":"\"standard_user\"","children":[{"start":25,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":44,"value":"\"secret_sauce\"","children":[{"start":45,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And click on login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then user should be navigated to homepage","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user added product to cart","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then user clicks on cart icon","stepMatchArguments":[]}]},
]; // bdd-data-end