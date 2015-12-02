define('snow-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'snow-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _snowAppConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_snowAppConfigEnvironment['default'].APP.name, _snowAppConfigEnvironment['default'].APP.version)
  };
});