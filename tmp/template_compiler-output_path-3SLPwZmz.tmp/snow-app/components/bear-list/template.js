export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
        return morphs;
      },
      statements: [
        ["content","bear",["loc",[null,[5,6],[5,14]]]]
      ],
      locals: ["bear"],
      templates: []
    };
  }());
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
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createElementMorph(element0);
      morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","input",[],["value",["subexpr","@mut",[["get","bearName",["loc",[null,[1,14],[1,22]]]]],[],[]]],["loc",[null,[1,0],[1,24]]]],
      ["element","action",["addBear"],[],["loc",[null,[2,8],[2,28]]]],
      ["block","each",[["get","bears",["loc",[null,[4,9],[4,14]]]]],[],0,null,["loc",[null,[4,1],[6,10]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));