'use strict';

var Hero = new NGNX.VIEW.Registry({
  parent: Site,
  selector: 'main > .splash section.hero',
  namespace: 'hero.',

  references: {
    slider: '> .slider'
  },

  init: function init() {
    var _this = this;

    Site.hero = this.self.element;

    setInterval(function () {
      return _this.ref.slider.element.next();
    }, 6180);
  }
});