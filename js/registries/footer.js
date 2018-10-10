'use strict';

var Footer = new NGNX.VIEW.Registry({
  parent: Site,
  selector: '> footer',
  namespace: 'footer.',

  references: {
    copyright: '.copyright',
    copyrightYear: '#copyright_year'
  },

  init: function init() {
    var _this = this;

    this.on({
      'copyright-year': {
        set: function set() {
          var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getFullYear();

          _this.ref.copyrightYear.innerHTML = year;
        }
      }
    });

    this.emit('copyright-year.set');

    Site.footer = this.self.element;
  }
});