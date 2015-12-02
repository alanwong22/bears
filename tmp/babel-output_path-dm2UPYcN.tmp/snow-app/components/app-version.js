define('snow-app/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'snow-app/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _snowAppConfigEnvironment) {

  var name = _snowAppConfigEnvironment['default'].APP.name;
  var version = _snowAppConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});