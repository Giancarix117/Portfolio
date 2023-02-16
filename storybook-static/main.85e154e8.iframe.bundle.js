(self.webpackChunkmy_app = self.webpackChunkmy_app || []).push([
  [179],
  {
    "./src/stories/assets/About.stories.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return About_stories;
          },
        });
      var objectSpread2 = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"
        ),
        jsx_runtime =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./node_modules/react/jsx-runtime.js"));
      function About() {
        return (0, jsx_runtime.jsx)("section", {
          id: "about",
          children: (0, jsx_runtime.jsxs)("div", {
            className:
              "container mx-auto flex px-10 py-20 md:flex-row flex-col items-center",
            children: [
              (0, jsx_runtime.jsxs)("div", {
                className:
                  "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",
                children: [
                  (0, jsx_runtime.jsxs)("h1", {
                    className:
                      "title-font sm:text-4xl text-3xl mb-4 font-medium text-white",
                    children: [
                      "Hi, I'm Giancarlo.",
                      (0, jsx_runtime.jsx)("br", {
                        className: "hidden lg:inline-block",
                      }),
                      "I'm working on becoming the ultimate cybersecurity dude!",
                    ],
                  }),
                  (0, jsx_runtime.jsx)("p", {
                    className: "mb-8 leading-relaxed",
                    children:
                      "Welcome to my amazing portfolio. Its second to none. You will never find a better portfolio than this. Trust me i looked.",
                  }),
                  (0, jsx_runtime.jsxs)("div", {
                    className: "flex justify-center",
                    children: [
                      (0, jsx_runtime.jsx)("a", {
                        href: "#contact",
                        className:
                          "inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg",
                        children: "Work With Me",
                      }),
                      (0, jsx_runtime.jsx)("a", {
                        href: "#projects",
                        className:
                          "ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg",
                        children: "See My Past Work",
                      }),
                    ],
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)("div", {
                className: "lg:max-w-lg lg:w-full md:w-1/2 w-5/6",
                children: (0, jsx_runtime.jsx)("img", {
                  className: "object-cover object-center rounded",
                  alt: "hero",
                  src: "./me.svg",
                }),
              }),
            ],
          }),
        });
      }
      (About.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "About",
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src\\components\\About.js"] = {
            name: "About",
            docgenInfo: About.__docgenInfo,
            path: "src\\components\\About.js",
          });
      var About_stories = { title: "About", component: About },
        Basic = function Basic() {
          return (0, jsx_runtime.jsx)(About, {});
        };
      Basic.parameters = (0, objectSpread2.Z)(
        { storySource: { source: "() => <About />" } },
        Basic.parameters
      );
      var __namedExportsOrder = ["Basic"];
      (Basic.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Basic",
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src\\stories\\assets\\About.stories.js"] = {
            name: "Basic",
            docgenInfo: Basic.__docgenInfo,
            path: "src\\stories\\assets\\About.stories.js",
          });
    },
    "./src/stories/assets/Button.stories.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Green: function () {
            return Green;
          },
          Large: function () {
            return Large;
          },
          LongLabel: function () {
            return LongLabel;
          },
          Red: function () {
            return Red;
          },
          Small: function () {
            return Small;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return Button_stories;
          },
        });
      var objectSpread2 = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      function Button(_ref) {
        var label = _ref.label,
          _ref$backgroundColor = _ref.backgroundColor,
          backgroundColor =
            void 0 === _ref$backgroundColor ? "red" : _ref$backgroundColor,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? "md" : _ref$size,
          handleClick = _ref.handleClick,
          scale = 1;
        "sm" === size && (scale = 0.75), "lg" === size && (scale = 1.5);
        var style = {
          backgroundColor: backgroundColor,
          padding: "".concat(0.5 * scale, "rem ").concat(1 * scale, "rem"),
          border: "none",
        };
        return (0, jsx_runtime.jsx)("button", {
          onClick: handleClick,
          style: style,
          children: label,
        });
      }
      Button.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Button",
        props: {
          backgroundColor: {
            defaultValue: { value: '"red"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          size: {
            defaultValue: { value: '"md"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"sm"', computed: !1 },
                { value: '"md"', computed: !1 },
                { value: '"lg"', computed: !1 },
              ],
            },
            required: !1,
          },
          label: { description: "", type: { name: "string" }, required: !1 },
          handleClick: {
            description: "",
            type: { name: "func" },
            required: !1,
          },
        },
      };
      var components_Button = Button;
      "undefined" != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES["src\\components\\Button.js"] = {
          name: "Button",
          docgenInfo: Button.__docgenInfo,
          path: "src\\components\\Button.js",
        });
      var Button_stories = {
          title: "Components/Button",
          component: components_Button,
          argTypes: { handleClick: { action: "handleClick" } },
        },
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(
            components_Button,
            (0, objectSpread2.Z)({}, args)
          );
        },
        Red = Template.bind({});
      Red.args = { backgroundColor: "red", label: "Press Me", size: "md" };
      var Green = Template.bind({});
      Green.args = { backgroundColor: "green", label: "Press Me", size: "md" };
      var Small = Template.bind({});
      Small.args = { backgroundColor: "red", label: "Press Me", size: "sm" };
      var Large = Template.bind({});
      Large.args = { backgroundColor: "red", label: "Press Me", size: "lg" };
      var LongLabel = Template.bind({});
      (LongLabel.args = {
        backgroundColor: "red",
        label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
        size: "md",
      }),
        (Red.parameters = (0, objectSpread2.Z)(
          { storySource: { source: "(args) => <Button {...args} />" } },
          Red.parameters
        )),
        (Green.parameters = (0, objectSpread2.Z)(
          { storySource: { source: "(args) => <Button {...args} />" } },
          Green.parameters
        )),
        (Small.parameters = (0, objectSpread2.Z)(
          { storySource: { source: "(args) => <Button {...args} />" } },
          Small.parameters
        )),
        (Large.parameters = (0, objectSpread2.Z)(
          { storySource: { source: "(args) => <Button {...args} />" } },
          Large.parameters
        )),
        (LongLabel.parameters = (0, objectSpread2.Z)(
          { storySource: { source: "(args) => <Button {...args} />" } },
          LongLabel.parameters
        ));
      var __namedExportsOrder = ["Red", "Green", "Small", "Large", "LongLabel"];
    },
    "./.storybook/preview.js-generated-config-entry.js": function (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, {
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          parameters: function () {
            return parameters;
          },
        });
      var ClientApi = __webpack_require__(
          "./node_modules/@storybook/client-api/dist/esm/ClientApi.js"
        ),
        parameters = {
          actions: { argTypesRegex: "^on[A-Z].*" },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ },
          },
        },
        __namedExportsOrder = ["parameters"];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case "args":
            return (0, ClientApi.uc)(value);
          case "argTypes":
            return (0, ClientApi.v9)(value);
          case "decorators":
            return value.forEach(function (decorator) {
              return (0, ClientApi.$9)(decorator, !1);
            });
          case "loaders":
            return value.forEach(function (loader) {
              return (0, ClientApi.HZ)(loader, !1);
            });
          case "parameters":
            return (0, ClientApi.h1)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case "argTypesEnhancers":
            return value.forEach(function (enhancer) {
              return (0, ClientApi.My)(enhancer);
            });
          case "argsEnhancers":
            return value.forEach(function (enhancer) {
              return (0, ClientApi._C)(enhancer);
            });
          case "render":
            return (0, ClientApi.$P)(value);
          case "globals":
          case "globalTypes":
            var v = {};
            return (v[key] = value), (0, ClientApi.h1)(v, !1);
          case "__namedExportsOrder":
          case "decorateStory":
          case "renderToDOM":
            return null;
          default:
            return console.log(key + " was not supported :( !");
        }
      });
    },
    "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":
      function (module, __unused_webpack_exports, __webpack_require__) {
        var map = {
          "./stories/assets/About.stories.js":
            "./src/stories/assets/About.stories.js",
          "./stories/assets/Button.stories.js":
            "./src/stories/assets/Button.stories.js",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$");
      },
    "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":
      function (module) {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        (webpackEmptyContext.keys = function () {
          return [];
        }),
          (webpackEmptyContext.resolve = webpackEmptyContext),
          (webpackEmptyContext.id =
            "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),
          (module.exports = webpackEmptyContext);
      },
    "./storybook-init-framework-entry.js": function (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__(
        "./node_modules/@storybook/react/dist/esm/client/index.js"
      );
    },
    "?4f7e": function () {},
    "./generated-stories-entry.cjs": function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      "use strict";
      (module = __webpack_require__.nmd(module)),
        (0,
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/index.js"
        ).configure)(
          [
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"
            ),
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"
            ),
          ],
          module,
          !1
        );
    },
  },
  function (__webpack_require__) {
    var __webpack_exec__ = function (moduleId) {
      return __webpack_require__((__webpack_require__.s = moduleId));
    };
    __webpack_require__.O(0, [426], function () {
      return (
        __webpack_exec__(
          "./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/core-client/dist/esm/globals/globals.js"
        ),
        __webpack_exec__("./storybook-init-framework-entry.js"),
        __webpack_exec__(
          "./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),
        __webpack_exec__("./generated-stories-entry.cjs")
      );
    });
    __webpack_require__.O();
  },
]);