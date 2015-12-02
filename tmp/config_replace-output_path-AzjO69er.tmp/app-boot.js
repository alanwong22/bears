/* jshint ignore:start */

define('snow-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'snow-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("snow-app/app")["default"].create({"name":"snow-app","version":"0.0.0+"});
}

/* jshint ignore:end */
