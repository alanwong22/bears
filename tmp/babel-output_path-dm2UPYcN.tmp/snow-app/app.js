define('snow-app/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'snow-app/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _snowAppConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _snowAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _snowAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _snowAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});