'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = component;

var _jquery = require('jquery/dist/jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _runtime = require('jade/runtime');

var _runtime2 = _interopRequireDefault(_runtime);

var _zoom = require('./zoom');

var _assets = require('./assets');

var _assets2 = _interopRequireDefault(_assets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function component($elements) {

  console.log("Component...");
  console.log($elements);

  // Export jade runtime
  window.jade = _runtime2.default;

  // Inject styles
  (0, _jquery2.default)('head').append('<style id=\'#component-zoom\'>' + _assets2.default['styles.css'] + '</style>');

  // Handle component instances
  $elements.each(function (i, el) {
    var instance = new _zoom.Zoom((0, _jquery2.default)(el));
    console.log(instance);
  });
}