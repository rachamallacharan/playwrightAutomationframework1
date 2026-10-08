// Generated from: tests\Features\login.feature
import { test } from "../../../tests/Fixtures/fixtures.js";

test.describe('website validation', () => {

  test.describe('validation of login functionality', () => {

    test('Example #1', async ({ Given, When, Then, And, page }) => { 
      await Given('User launches application', null, { page }); 
      await When('User enters application "standard_user" and "secret_sauce"', null, { page }); 
      await And('click on login button', null, { page }); 
      await Then('user should be navigated to homepage', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, And, page }) => { 
      await Given('User launches application', null, { page }); 
      await When('User enters application "problem_user" and "secret_sauce"', null, { page }); 
      await And('click on login button', null, { page }); 
      await Then('user should be navigated to homepage', null, { page }); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches application","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User enters application \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":24,"value":"\"standard_user\"","children":[{"start":25,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":44,"value":"\"secret_sauce\"","children":[{"start":45,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And click on login button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then user should be navigated to homepage","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches application","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User enters application \"problem_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":24,"value":"\"problem_user\"","children":[{"start":25,"value":"problem_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"secret_sauce\"","children":[{"start":44,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And click on login button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then user should be navigated to homepage","stepMatchArguments":[]}]},
]; // bdd-data-end