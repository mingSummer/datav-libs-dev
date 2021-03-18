import { pushScopeId, popScopeId, openBlock, createBlock, withScopeId, createVNode, toDisplayString, createCommentVNode } from 'vue';

var script$4 = {
  name: "TestComponent"
};

var _withId$3 = /*#__PURE__*/withScopeId("data-v-7cc4288f");

pushScopeId("data-v-7cc4288f");

var _hoisted_1$4 = {
  width: "0",
  height: "0"
};

var _hoisted_2$1 = /*#__PURE__*/createVNode("defs", null, [/*#__PURE__*/createVNode("symbol", {
  id: "more",
  viewBox: "0 0 100 100"
}, [/*#__PURE__*/createVNode("circle", {
  r: "5",
  cx: "20",
  cy: "25",
  fill: "currentColor"
}), /*#__PURE__*/createVNode("circle", {
  r: "5",
  cx: "20",
  cy: "50",
  fill: "currentColor"
}), /*#__PURE__*/createVNode("circle", {
  r: "5",
  cx: "20",
  cy: "75",
  fill: "currentColor"
}), /*#__PURE__*/createVNode("line", {
  x1: "40",
  y1: "25",
  x2: "90",
  y2: "25",
  "stroke-width": "8",
  stroke: "currentColor"
}), /*#__PURE__*/createVNode("line", {
  x1: "40",
  y1: "50",
  x2: "90",
  y2: "50",
  "stroke-width": "8",
  stroke: "currentColor"
}), /*#__PURE__*/createVNode("line", {
  x1: "40",
  y1: "75",
  x2: "90",
  y2: "75",
  "stroke-width": "8",
  stroke: "currentColor"
})]), /*#__PURE__*/createVNode("symbol", {
  id: "filledArrowRight",
  viewBox: "0 0 100 100"
}, [/*#__PURE__*/createVNode("polyline", {
  points: "20 10, 80 50, 20 90",
  fill: "currentColor"
})]), /*#__PURE__*/createVNode("symbol", {
  id: "ArrowRight",
  viewBox: "0 0 100 100"
}, [/*#__PURE__*/createVNode("polyline", {
  points: "30 20, 70 50, 30 80",
  fill: "transparent",
  stroke: "currentColor",
  "stroke-width": "3"
})]), /*#__PURE__*/createVNode("symbol", {
  id: "icon",
  viewBox: "0 0 1071 1024"
}, [/*#__PURE__*/createVNode("path", {
  d: "M814.518427 465.473078a254.362469 254.362469 0 0 0-165.4636 60.972523 325.807371 325.807371 0 1 0-19.315723 370.954963A255.991506 255.991506 0 1 0 814.518427 465.473078z",
  fill: "#FF3B61",
  "p-id": "5207"
}), /*#__PURE__*/createVNode("path", {
  d: "M416.800715 443.597441c-6.748867 0-15.126771 55.154534 37.235128 80.986403s101.000285-12.799575 98.44037-18.617564-36.30425 1.629037-77.030171-19.548442-51.89646-44.216715-58.645327-42.820397zM831.972394 503.173646c-4.654391-2.094476-20.013881 20.94476-55.387253 31.184419s-54.456375 3.258074-57.714449 7.679746 21.642918 40.493202 66.325072 26.530028 51.431021-63.299718 46.77663-65.394193z",
  fill: "#ED0C4C",
  "p-id": "5208"
}), /*#__PURE__*/createVNode("path", {
  d: "M719.336131 403.569678c-25.366431-51.198301-58.645327-105.654676-70.979463-125.668557l10.705099-18.850284A1728.408103 1728.408103 0 0 0 773.792506 12.600833c1.396317-7.447026-42.587678-16.057649-50.034703-11.170539s-1.861756 10.47238-7.447026 25.83187c-11.635978 32.348018-37.002409 95.182296-79.822806 186.175641-103.79292 223.410769-190.830032 295.786549-170.350711 288.106804s83.08088-61.9034 162.903685-191.76091a1007.908374 1007.908374 0 0 1 88.666149 132.650144c29.788102 52.594618 55.852692 122.177764 60.507083 106.352835a777.516019 777.516019 0 0 0-58.878046-145.217z",
  fill: "#604D42",
  "p-id": "5209"
}), /*#__PURE__*/createVNode("path", {
  d: "M634.626215 239.502395S573.653692 139.665707 461.715589 136.407634s-204.793205 93.08782-204.793205 93.08782A362.34434 362.34434 0 0 0 488.711056 297.682282c104.258359-5.585269 145.915158-58.179888 145.915159-58.179887z",
  fill: "#73D36E",
  "p-id": "5210"
}), /*#__PURE__*/createVNode("path", {
  d: "M157.085697 540.176054c-3.490793 14.894051 27.693627 41.6568 38.864165 18.384845C232.719551 484.788801 265.300288 474.78186 255.991506 467.800274c-26.06459-19.781162-93.08782 42.354958-98.905809 72.37578zM293.692073 424.747157a20.246601 20.246601 0 0 0-14.894051 23.271955c2.792635 10.23966 13.032295 11.868697 23.271955 8.843343s18.152125-9.541502 15.35949-19.781162a19.548442 19.548442 0 0 0-23.737394-12.334136zM592.736696 693.538238c0 11.635978 30.020822 23.271955 32.813456 3.956232 8.610623-62.13612 30.718981-77.262891 23.271955-80.288245-25.133711-8.145184-58.179888 52.827338-56.085411 76.332013zM685.591796 581.832854a14.894051 14.894051 0 0 0-20.944759-3.723513 15.35949 15.35949 0 0 0-5.11983 20.944759c4.421671 6.748867 12.334136 5.585269 19.548442 0s10.937819-11.635978 6.516147-17.221246z",
  fill: "#FFFFFF",
  "p-id": "5211"
}), /*#__PURE__*/createVNode("path", {
  d: "M784.497605 431.263304a267.162044 267.162044 0 0 0-262.973092 218.989098 11.635978 11.635978 0 0 0 9.308782 13.497734 11.868697 11.868697 0 0 0 13.497734-9.308782 243.890089 243.890089 0 1 1 10.705099 127.995752 11.635978 11.635978 0 0 0-21.875637 7.912465 265.300288 265.300288 0 0 0 46.54391 80.520965 313.473235 313.473235 0 1 1-107.050994-493.598167 11.635978 11.635978 0 1 0 9.541502-21.177479 337.210629 337.210629 0 1 0 113.334421 531.996892 267.162044 267.162044 0 1 0 188.037397-456.828478z",
  fill: "#604D42",
  "p-id": "5212"
}), /*#__PURE__*/createVNode("path", {
  d: "M531.066015 742.176624h1.396317a11.635978 11.635978 0 0 0 10.006941-13.032295 245.984565 245.984565 0 0 1-1.861757-30.9517 11.635978 11.635978 0 1 0-23.271955 0 270.187398 270.187398 0 0 0 2.094476 33.511615 11.635978 11.635978 0 0 0 11.635978 10.47238zM438.909073 288.838939h19.548442c108.91275-5.817989 153.362184-60.274364 155.22394-62.601559a11.635978 11.635978 0 0 0 0-13.265014c-2.559915-4.421671-65.626913-105.654676-182.452128-108.68003s-209.447596 93.08782-213.403828 96.578613a11.635978 11.635978 0 0 0 0 17.221247 370.024086 370.024086 0 0 0 221.083574 70.746743z m-7.447026-161.740087c86.571673 2.327196 141.958926 67.954109 158.249294 90.295185a209.447596 209.447596 0 0 1-132.417424 47.707508 355.828193 355.828193 0 0 1-212.007511-57.947168c26.06459-23.271955 99.836687-82.61544 185.942921-80.055525z",
  fill: "#604D42",
  "p-id": "5213"
})])], -1
/* HOISTED */
);

popScopeId();

var render$4 = /*#__PURE__*/_withId$3(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4, [_hoisted_2$1]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$4 = "";
styleInject(css_248z$4);

script$4.render = render$4;
script$4.__scopeId = "data-v-7cc4288f";
script$4.__file = "src/components/Test/Test.vue";

function Test (Vue) {
  Vue.component(script$4.name, script$4);
}

var script$3 = {
  name: 'TestComponent2',
  setup: function setup() {
    var message = 'hello world2222222!';
    return {
      message: message
    };
  }
};

var _withId$2 = /*#__PURE__*/withScopeId("data-v-f780135e");

pushScopeId("data-v-f780135e");

var _hoisted_1$3 = {
  "class": "test2"
};

popScopeId();

var render$3 = /*#__PURE__*/_withId$2(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$3, [createVNode("div", null, toDisplayString($setup.message), 1
  /* TEXT */
  )]);
});

var css_248z$3 = ".test2[data-v-f780135e] {\n  color: blue;\n}";
styleInject(css_248z$3);

script$3.render = render$3;
script$3.__scopeId = "data-v-f780135e";
script$3.__file = "src/components/Test2/Test2.vue";

function Test2 (Vue) {
  Vue.component(script$3.name, script$3);
}

var script$2 = {
  name: 'TestComponent3',
  setup: function setup() {
    var message = 'hello world33333!';
    return {
      message: message
    };
  }
};

var _withId$1 = /*#__PURE__*/withScopeId("data-v-1932c093");

pushScopeId("data-v-1932c093");

var _hoisted_1$2 = {
  "class": "test3"
};

popScopeId();

var render$2 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$2, [createVNode("div", null, toDisplayString($setup.message), 1
  /* TEXT */
  )]);
});

var css_248z$2 = ".test3[data-v-1932c093] {\n  color: green;\n}";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__scopeId = "data-v-1932c093";
script$2.__file = "src/components/Test3/Test3.vue";

function Test3 (Vue) {
  Vue.component(script$2.name, script$2);
}

var script$1 = {
  name: "Icon",
  props: {
    name: String,
    prefix: {
      type: String,
      "default": "icon"
    },
    style: Object
  },
  setup: function setup(ctx) {
    var iconName = "#".concat(ctx.prefix).concat(ctx.name);
    return {
      iconName: iconName
    };
  }
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var _hoisted_1$1 = {
  "class": "icon"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    "class": "icon-wrapper",
    style: _objectSpread2({}, $props.style)
  }, [(openBlock(), createBlock("svg", _hoisted_1$1, [createVNode("use", {
    href: $setup.iconName
  }, null, 8
  /* PROPS */
  , ["href"])]))], 4
  /* STYLE */
  );
}

var css_248z$1 = "\n.icon-wrapper {\r\n    display: inline-block;\n}\n.icon {\r\n  width: 100%;\r\n  height: 100%;\r\n  vertical-align: -0.15em;\r\n  fill: currentColor;\r\n  overflow: hidden;\n}\r\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__file = "src/components/Icon/Icon.vue";

function Icon (Vue) {
  Vue.component(script$1.name, script$1);
}

var script = {
  name: "SvgAnimation"
};

var _withId = /*#__PURE__*/withScopeId("data-v-5a151e4f");

pushScopeId("data-v-5a151e4f");

var _hoisted_1 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createVNode("svg", {
  width: "500",
  height: "200",
  viewBox: "0 0 500 200"
}, [/*#__PURE__*/createCommentVNode("\r\n          matrix(2 1 -1 2 50 0),第1,3,5为一组，第2,4,6为一组,(_x,_y)表示原有坐标\r\n          [2,-1,50] => 2*_x + (-1)*_y + 50 = x坐标\r\n          [1, 2, 0] => 1*_x + 2*_y + 0 = y坐标\r\n\r\n          顶点坐标\r\n          [0,0]     => [50,0]\r\n          [100,0]   => [250,0]\r\n          [100,50]  => [200,200]\r\n          [0,50]    => [0,100]\r\n        "), /*#__PURE__*/createVNode("rect", {
  x: "0",
  y: "0",
  width: "100",
  height: "50",
  fill: "red",
  transform: "matrix(2 1 -1 2 50 0)"
})])], -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createVNode("svg", {
  width: "440",
  height: "440"
}, [/*#__PURE__*/createVNode("circle", {
  cx: "220",
  cy: "220",
  r: "200",
  "stroke-width": "20",
  stroke: "#d1d3d7",
  fill: "none"
}), /*#__PURE__*/createVNode("circle", {
  "class": "circle",
  cx: "220",
  cy: "220",
  r: "200",
  "stroke-width": "20",
  stroke: "#00A5E0",
  fill: "none"
})])], -1
/* HOISTED */
);

popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [_hoisted_1, _hoisted_2]);
});

var css_248z = ".container[data-v-5a151e4f] svg[data-v-5a151e4f] {\n  border: 1px solid #000;\n}\n\n.circle[data-v-5a151e4f] {\n  animation: circle 5s linear infinite;\n}";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-5a151e4f";
script.__file = "src/components/SvgAnimation/SvgAnimation.vue";

function SvgAnimation (Vue) {
  Vue.component(script.name, script);
}

function index (Vue) {
  Vue.use(Test);
  Vue.use(Test2);
  Vue.use(Test3);
  Vue.use(Icon);
  Vue.use(SvgAnimation);
}

export default index;
