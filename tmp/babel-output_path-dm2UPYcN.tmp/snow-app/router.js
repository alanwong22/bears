define('snow-app/router', ['exports', 'ember', 'snow-app/config/environment'], function (exports, _ember, _snowAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _snowAppConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});