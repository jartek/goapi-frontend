var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app/scripts',

  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    angular: '../bower_components/angular/angular',
    'sass-bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',
    underscore: '../bower_components/underscore/underscore',
    'angular-ui-utils': '../bower_components/angular-ui-utils/ui-utils',
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    ngReact: '../bower_components/ngReact/ngReact',
    react: '../bower_components/react/react'
  },

  shim: {
    'angular': {
      'exports': 'angular'
    },
    'angular-mocks': {
      deps: ['angular'],
      'exports': 'angular.mock'
    },
    'ngReact': {
      deps: ['angular', 'react']
    }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
