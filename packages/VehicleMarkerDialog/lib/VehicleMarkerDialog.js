"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VehicleMarkerDialog = _react["default"].forwardRef(function (props, ref) {
  return _react["default"].createElement("button", {
    ref: ref,
    className: "FancyButton"
  }, props.children);
});

var _default = VehicleMarkerDialog;
exports["default"] = _default;