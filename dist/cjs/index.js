'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

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

var css_248z = "button {\n  font-size: 60px;\n}";
styleInject(css_248z);

var Button = function (props) {
    var _a = React.useState(0), count = _a[0], setCount = _a[1];
    var handleClick = function () {
        setCount(count + 1);
    };
    return React__default["default"].createElement("button", { onClick: handleClick },
        props.label,
        " - ",
        count);
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
