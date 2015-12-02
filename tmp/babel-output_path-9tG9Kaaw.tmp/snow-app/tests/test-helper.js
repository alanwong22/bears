define('snow-app/tests/test-helper', ['exports', 'snow-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _snowAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_snowAppTestsHelpersResolver['default']);
});