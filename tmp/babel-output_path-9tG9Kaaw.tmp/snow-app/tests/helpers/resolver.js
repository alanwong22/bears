define('snow-app/tests/helpers/resolver', ['exports', 'ember/resolver', 'snow-app/config/environment'], function (exports, _emberResolver, _snowAppConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _snowAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _snowAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});