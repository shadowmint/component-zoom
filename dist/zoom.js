'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Zoom = undefined;

var _jquery = require('jquery/dist/jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _root = require('component-utils/dist/root');

var _short = require('./templates/short');

var _short2 = _interopRequireDefault(_short);

var _full = require('./templates/full');

var _full2 = _interopRequireDefault(_full);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Zoom = exports.Zoom = (function () {

  /** Create a new instance */

  function Zoom($el) {
    _classCallCheck(this, Zoom);

    // Setup
    this.$el = $el;
    this.templates = {};
    this.templates.short = _short2.default;
    this.templates.full = _full2.default;

    // Draw initial state
    this.redraw();
  }

  _createClass(Zoom, [{
    key: 'redraw',
    value: function redraw() {}
  }]);

  return Zoom;
})();