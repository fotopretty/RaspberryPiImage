// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Controls.bind__template = (function(_super) {
    __extends(bind__template, _super);

    function bind__template() {
      return bind__template.__super__.constructor.apply(this, arguments);
    }

    bind__template.prototype.createDom = function() {
      this.noUID = true;
      return "<children>";
    };

    bind__template.prototype.setupDom = function(dom) {
      bind__template.__super__.setupDom.call(this, dom);
      if (this.children.length > 0) {
        this.dom = this.children[0].dom;
        return this.properties = this.children[0].properties;
      }
    };

    return bind__template;

  })(window.Control);

}).call(this);
