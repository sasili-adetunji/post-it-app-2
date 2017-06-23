'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

var _PostItDispatcher = require('../dispatchers/PostItDispatcher');

var _PostItDispatcher2 = _interopRequireDefault(_PostItDispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseStore = function (_EventEmitter) {
  _inherits(BaseStore, _EventEmitter);

  function BaseStore() {
    _classCallCheck(this, BaseStore);

    return _possibleConstructorReturn(this, (BaseStore.__proto__ || Object.getPrototypeOf(BaseStore)).call(this));
  }

  _createClass(BaseStore, [{
    key: 'subscribe',
    value: function subscribe(actionSubscribe) {
      this._dispatchToken = _PostItDispatcher2.default.register(actionSubscribe());
    }
  }, {
    key: 'emitChange',
    value: function emitChange() {
      this.emit('CHANGE');
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(cb) {
      this.on('CHANGE', cb);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(cb) {
      this.removeListener('CHANGE', cb);
    }
  }, {
    key: 'dispatchToken',
    get: function get() {
      return this._dispatchToken;
    }
  }]);

  return BaseStore;
}(_events.EventEmitter);

exports.default = BaseStore;