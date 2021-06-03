(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(242);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(235);
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(228);
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_scss__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      className: "checkbox",
      name: "checkedB",
      color: "primary",
      checkedIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./images/checkbox.svg"
      })
    }),
    className: "checkboxContainer",
    label: props.children
  });
});

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ EmployeeForm; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(35);

// EXTERNAL MODULE: ./src/components/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(61);

// EXTERNAL MODULE: ./src/components/Form/Form.scss
var Form = __webpack_require__(231);

// EXTERNAL MODULE: ./src/components/Modal/SimpleModal/SimpleModal.js
var SimpleModal = __webpack_require__(86);

// EXTERNAL MODULE: ./src/components/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(218);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 7 modules
var Select = __webpack_require__(222);

// EXTERNAL MODULE: ./src/components/Select/Select.scss
var Select_Select = __webpack_require__(232);

// CONCATENATED MODULE: ./src/components/Select/Select.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function SimpleSelect() {
  var _React$useState = react_default.a.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      age = _React$useState2[0],
      setAge = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setAge(event.target.value);
  };

  return /*#__PURE__*/react_default.a.createElement(FormControl["a" /* default */], {
    variant: "outlined",
    className: "Select"
  }, /*#__PURE__*/react_default.a.createElement(InputLabel["a" /* default */], {
    id: "demo-simple-select-label"
  }, "\u0422\u0435\u043C\u0430"), /*#__PURE__*/react_default.a.createElement(Select["a" /* default */], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: age,
    onChange: handleChange // icon

  }, /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
    value: 1
  }, "\u041F\u0440\u0438\u0437\u044B"), /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
    value: 2
  }, "\u0427\u0435\u043A\u0438"), /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
    value: 3
  }, "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441\u0430\u0439\u0442\u0430"), /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
    value: 4
  }, "\u0414\u0440\u0443\u0433\u043E\u0435")));
}
// CONCATENATED MODULE: ./src/components/Form/Form.js







function EmployeeForm() {
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 12,
    md: 4,
    component: "form",
    className: "form"
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "formTitle"
  }, "\u041D\u0435 \u043D\u0430\u0448\u0435\u043B \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0441\u0432\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 ?"), /*#__PURE__*/react_default.a.createElement("p", null, "\u0417\u0430\u0434\u0430\u0439 \u0435\u0433\u043E \u043D\u0430\u043C \u0438 \u043C\u044B \u043E\u0431\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0442\u0435\u0431\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043C!"), /*#__PURE__*/react_default.a.createElement(TextField["b" /* default */], {
    type: "email",
    placeholder: "E-mail"
  }), /*#__PURE__*/react_default.a.createElement(TextField["b" /* default */], {
    type: "name",
    placeholder: "Имя"
  }), /*#__PURE__*/react_default.a.createElement(SimpleSelect, null), /*#__PURE__*/react_default.a.createElement(TextField["b" /* default */], {
    type: "message",
    placeholder: "Сообщение"
  }), /*#__PURE__*/react_default.a.createElement(Checkbox["a" /* default */], null, "\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"), SimpleModal["a" /* question */]);
}

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(70);

var _interopRequireWildcard = __webpack_require__(71);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(72));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

exports.default = _default;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ FAQ; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(100);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js




function _toArray(arr) {
  return Object(arrayWithHoles["a" /* default */])(arr) || Object(iterableToArray["a" /* default */])(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || Object(nonIterableRest["a" /* default */])();
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__(175);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/transitions.js
var transitions = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/transitions/utils.js
var utils = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js












var styles = function styles(theme) {
  return {
    /* Styles applied to the container element. */
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },

    /* Styles applied to the container element when the transition has entered. */
    entered: {
      height: 'auto',
      overflow: 'visible'
    },

    /* Styles applied to the container element when the transition has exited and `collapsedHeight` != 0px. */
    hidden: {
      visibility: 'hidden'
    },

    /* Styles applied to the outer wrapper element. */
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: 'flex'
    },

    /* Styles applied to the inner wrapper element. */
    wrapperInner: {
      width: '100%'
    }
  };
};
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/components/steppers/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Collapse_Collapse = /*#__PURE__*/react["forwardRef"](function Collapse(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$collapsedHeigh = props.collapsedHeight,
      collapsedHeightProp = _props$collapsedHeigh === void 0 ? '0px' : _props$collapsedHeigh,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? transitions["b" /* duration */].standard : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Transition["a" /* default */] : _props$TransitionComp,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "collapsedHeight", "component", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var theme = Object(useTheme["a" /* default */])();
  var timer = react["useRef"]();
  var wrapperRef = react["useRef"](null);
  var autoTransitionDuration = react["useRef"]();
  var collapsedHeight = typeof collapsedHeightProp === 'number' ? "".concat(collapsedHeightProp, "px") : collapsedHeightProp;
  react["useEffect"](function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react["useRef"](null);
  var handleRef = Object(useForkRef["a" /* default */])(ref, enableStrictModeCompat ? nodeRef : undefined);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    node.style.height = collapsedHeight;

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntering = normalizedTransitionCallback(function (node, isAppearing) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;

    var _getTransitionProps = Object(utils["a" /* getTransitionProps */])({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration;

    if (timeout === 'auto') {
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
    }

    node.style.height = "".concat(wrapperHeight, "px");

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(function (node, isAppearing) {
    node.style.height = 'auto';

    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });
  var handleExit = normalizedTransitionCallback(function (node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    node.style.height = "".concat(wrapperHeight, "px");

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  var handleExiting = normalizedTransitionCallback(function (node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;

    var _getTransitionProps2 = Object(utils["a" /* getTransitionProps */])({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration;

    if (timeout === 'auto') {
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
    }

    node.style.height = collapsedHeight;

    if (onExiting) {
      onExiting(node);
    }
  });

  var addEndListener = function addEndListener(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;

    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }
  };

  return /*#__PURE__*/react["createElement"](TransitionComponent, Object(esm_extends["a" /* default */])({
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
      className: Object(clsx_m["a" /* default */])(classes.container, className, {
        'entered': classes.entered,
        'exited': !inProp && collapsedHeight === '0px' && classes.hidden
      }[state]),
      style: Object(esm_extends["a" /* default */])({
        minHeight: collapsedHeight
      }, style),
      ref: handleRef
    }, childProps), /*#__PURE__*/react["createElement"]("div", {
      className: classes.wrapper,
      ref: wrapperRef
    }, /*#__PURE__*/react["createElement"]("div", {
      className: classes.wrapperInner
    }, children)));
  });
});
 false ? undefined : void 0;
Collapse_Collapse.muiSupportAuto = true;
/* harmony default export */ var esm_Collapse_Collapse = (Object(withStyles["a" /* default */])(styles, {
  name: 'MuiCollapse'
})(Collapse_Collapse));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(113);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Accordion/AccordionContext.js

/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */

var AccordionContext = react["createContext"]({});

if (false) {}

/* harmony default export */ var Accordion_AccordionContext = (AccordionContext);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js














var Accordion_styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        '&:before': {
          display: 'none'
        }
      },
      '&$expanded': {
        margin: '16px 0',
        '&:first-child': {
          marginTop: 0
        },
        '&:last-child': {
          marginBottom: 0
        },
        '&:before': {
          opacity: 0
        }
      },
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: 0,
      '&:first-child': {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius
      },
      '&:last-child': {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        // Fix a rendering issue on Edge
        '@supports (-ms-ime-align: auto)': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {}
  };
};
var Accordion_Accordion = /*#__PURE__*/react["forwardRef"](function Accordion(props, ref) {
  var childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$defaultExpande = props.defaultExpanded,
      defaultExpanded = _props$defaultExpande === void 0 ? false : _props$defaultExpande,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      expandedProp = props.expanded,
      onChange = props.onChange,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? esm_Collapse_Collapse : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "defaultExpanded", "disabled", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]);

  var _useControlled = Object(useControlled["a" /* default */])({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'Accordion',
    state: 'expanded'
  }),
      _useControlled2 = Object(slicedToArray["a" /* default */])(_useControlled, 2),
      expanded = _useControlled2[0],
      setExpandedState = _useControlled2[1];

  var handleChange = react["useCallback"](function (event) {
    setExpandedState(!expanded);

    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);

  var _React$Children$toArr = react["Children"].toArray(childrenProp),
      _React$Children$toArr2 = _toArray(_React$Children$toArr),
      summary = _React$Children$toArr2[0],
      children = _React$Children$toArr2.slice(1);

  var contextValue = react["useMemo"](function () {
    return {
      expanded: expanded,
      disabled: disabled,
      toggle: handleChange
    };
  }, [expanded, disabled, handleChange]);
  return /*#__PURE__*/react["createElement"](Paper["a" /* default */], Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, expanded && classes.expanded, disabled && classes.disabled, !square && classes.rounded),
    ref: ref,
    square: square
  }, other), /*#__PURE__*/react["createElement"](Accordion_AccordionContext.Provider, {
    value: contextValue
  }, summary), /*#__PURE__*/react["createElement"](TransitionComponent, Object(esm_extends["a" /* default */])({
    in: expanded,
    timeout: "auto"
  }, TransitionProps), /*#__PURE__*/react["createElement"]("div", {
    "aria-labelledby": summary.props.id,
    id: summary.props['aria-controls'],
    role: "region"
  }, children)));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Accordion_Accordion = (Object(withStyles["a" /* default */])(Accordion_styles, {
  name: 'MuiAccordion'
})(Accordion_Accordion));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js



/* eslint-disable jsx-a11y/aria-role */







var AccordionSummary_styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      minHeight: 8 * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: theme.spacing(0, 2),
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      },
      '&$expanded': {
        minHeight: 64
      },
      '&$focused': {
        backgroundColor: theme.palette.action.focus
      },
      '&$disabled': {
        opacity: theme.palette.action.disabledOpacity
      }
    },

    /* Pseudo-class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
    expanded: {},

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the children wrapper element. */
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '&$expanded': {
        margin: '20px 0'
      }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent'
      },
      '&$expanded': {
        transform: 'rotate(180deg)'
      }
    }
  };
};
var AccordionSummary_AccordionSummary = /*#__PURE__*/react["forwardRef"](function AccordionSummary(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      expandIcon = props.expandIcon,
      IconButtonProps = props.IconButtonProps,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocusVisible = props.onFocusVisible,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "expandIcon", "IconButtonProps", "onBlur", "onClick", "onFocusVisible"]);

  var _React$useState = react["useState"](false),
      focusedState = _React$useState[0],
      setFocusedState = _React$useState[1];

  var handleFocusVisible = function handleFocusVisible(event) {
    setFocusedState(true);

    if (onFocusVisible) {
      onFocusVisible(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    setFocusedState(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  var _React$useContext = react["useContext"](Accordion_AccordionContext),
      _React$useContext$dis = _React$useContext.disabled,
      disabled = _React$useContext$dis === void 0 ? false : _React$useContext$dis,
      expanded = _React$useContext.expanded,
      toggle = _React$useContext.toggle;

  var handleChange = function handleChange(event) {
    if (toggle) {
      toggle(event);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return /*#__PURE__*/react["createElement"](ButtonBase["a" /* default */], Object(esm_extends["a" /* default */])({
    focusRipple: false,
    disableRipple: true,
    disabled: disabled,
    component: "div",
    "aria-expanded": expanded,
    className: Object(clsx_m["a" /* default */])(classes.root, className, disabled && classes.disabled, expanded && classes.expanded, focusedState && classes.focused),
    onFocusVisible: handleFocusVisible,
    onBlur: handleBlur,
    onClick: handleChange,
    ref: ref
  }, other), /*#__PURE__*/react["createElement"]("div", {
    className: Object(clsx_m["a" /* default */])(classes.content, expanded && classes.expanded)
  }, children), expandIcon && /*#__PURE__*/react["createElement"](IconButton["a" /* default */], Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.expandIcon, expanded && classes.expanded),
    edge: "end",
    component: "div",
    tabIndex: null,
    role: null,
    "aria-hidden": true
  }, IconButtonProps), expandIcon));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_AccordionSummary_AccordionSummary = (Object(withStyles["a" /* default */])(AccordionSummary_styles, {
  name: 'MuiAccordionSummary'
})(AccordionSummary_AccordionSummary));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js






var AccordionDetails_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      padding: theme.spacing(1, 2, 2)
    }
  };
};
var AccordionDetails_AccordionDetails = /*#__PURE__*/react["forwardRef"](function AccordionDetails(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className"]);

  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_AccordionDetails_AccordionDetails = (Object(withStyles["a" /* default */])(AccordionDetails_styles, {
  name: 'MuiAccordionDetails'
})(AccordionDetails_AccordionDetails));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(240);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore);

// EXTERNAL MODULE: ./src/components/Pagination/Pagination.js + 7 modules
var Pagination = __webpack_require__(105);

// EXTERNAL MODULE: ./src/components/Questions/Questions.scss
var Questions = __webpack_require__(239);

// CONCATENATED MODULE: ./src/components/Questions/Questions.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function Questions_Questions(arr) {
  return getAccordeon([{
    title: "В какие сроки проходит Акция?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "Какие продукты участвуют в акции?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "Какие призы я могу выиграть ?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "Сколько чеков нужно зарегистрировать?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "Как понять, что чек зарегистрирован?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "Куда на сайте загружать чеки?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "Где можно прочитать полный список правил акции?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "В какие сроки проходит Акция?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "В какие сроки проходит Акция?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "В какие сроки проходит Акция?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "В какие сроки проходит Акция?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }]);
}

function getAccordeon(arr) {
  var rowsPerPage = 7;

  var _React$useState = react_default.a.useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = react_default.a.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      expanded = _React$useState4[0],
      setExpanded = _React$useState4[1];

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var hangleExpand = function hangleExpand(id) {
    setExpanded(id);
  };

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    md: 7,
    className: "questions"
  }, /*#__PURE__*/react_default.a.createElement("h1", null, "\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"), arr.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage).map(function (row, id) {
    return /*#__PURE__*/react_default.a.createElement(esm_Accordion_Accordion, {
      className: "questionsAccordeon",
      expanded: expanded === id,
      onClick: function onClick() {
        return hangleExpand(id);
      },
      key: id
    }, /*#__PURE__*/react_default.a.createElement(esm_AccordionSummary_AccordionSummary, {
      className: "questionsAccordeonSummary",
      expandIcon: /*#__PURE__*/react_default.a.createElement(ExpandMore_default.a, null)
    }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      className: "questionsAccordeonTitle"
    }, row.title)), /*#__PURE__*/react_default.a.createElement(esm_AccordionDetails_AccordionDetails, null, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      className: "questionsAccordeonText"
    }, row.text)));
  }), /*#__PURE__*/react_default.a.createElement(Pagination["a" /* default */], {
    className: "FAQPagination",
    rowsPerPage: rowsPerPage,
    rows: arr.length,
    page: page,
    handler: handleChangePage
  }));
}
// EXTERNAL MODULE: ./src/components/Modal/Modal.js
var Modal = __webpack_require__(54);

// EXTERNAL MODULE: ./src/components/Modal/SimpleModal/SimpleModal.js
var SimpleModal = __webpack_require__(86);

// EXTERNAL MODULE: ./src/components/Form/Form.js + 1 modules
var Form = __webpack_require__(233);

// EXTERNAL MODULE: ./src/pages/faq/faq.scss
var faq = __webpack_require__(241);

// CONCATENATED MODULE: ./src/pages/faq/faq.js









function FAQ() {
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    justify: "space-between",
    className: "FAQ",
    id: "faq"
  }, /*#__PURE__*/react_default.a.createElement(Questions_Questions, null), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */], null));
}







/***/ })

}]);