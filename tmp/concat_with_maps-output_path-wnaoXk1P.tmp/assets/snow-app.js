"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

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
define('snow-app/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'snow-app/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _snowAppConfigEnvironment) {

  var name = _snowAppConfigEnvironment['default'].APP.name;
  var version = _snowAppConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('snow-app/components/bear-list/component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		bears: [],
		actions: {
			addBear: function addBear() {
				var bearName = this.get('bearName');
				this.get('bears').pushObject(bearName);
			}
		}
	});
});
define("snow-app/components/bear-list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 1
            },
            "end": {
              "line": 6,
              "column": 1
            }
          },
          "moduleName": "snow-app/components/bear-list/template.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "bear", ["loc", [null, [5, 6], [5, 14]]]]],
        locals: ["bear"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 5
          }
        },
        "moduleName": "snow-app/components/bear-list/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Add Bear");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "bearName", ["loc", [null, [1, 14], [1, 22]]]]], [], []]], ["loc", [null, [1, 0], [1, 24]]]], ["element", "action", ["addBear"], [], ["loc", [null, [2, 8], [2, 28]]]], ["block", "each", [["get", "bears", ["loc", [null, [4, 9], [4, 14]]]]], [], 0, null, ["loc", [null, [4, 1], [6, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('snow-app/controllers/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({});
});
define('snow-app/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('snow-app/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('snow-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'snow-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _snowAppConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_snowAppConfigEnvironment['default'].APP.name, _snowAppConfigEnvironment['default'].APP.version)
  };
});
define('snow-app/initializers/export-application-global', ['exports', 'ember', 'snow-app/config/environment'], function (exports, _ember, _snowAppConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_snowAppConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _snowAppConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_snowAppConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('snow-app/router', ['exports', 'ember', 'snow-app/config/environment'], function (exports, _ember, _snowAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _snowAppConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('snow-app/routes/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return $.get('/temp-data/cats.json');
		}
	});
});
define("snow-app/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 25
          }
        },
        "moduleName": "snow-app/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]], ["inline", "bear-list", [], ["bears", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 18], [2, 23]]]]], [], []]], ["loc", [null, [2, 0], [2, 25]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

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
//# sourceMappingURL=snow-app.map