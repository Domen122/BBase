const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/executionReport.json',
  output: 'reports/executionReport.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'STAGING',
    'Browser': 'Chrome',
    'Parallel': 'Scenarios',
    'Executed': 'Remote',
  },
};

reporter.generate(options);
