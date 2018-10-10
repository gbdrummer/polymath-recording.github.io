'use strict';

var Gear = new NGNX.VIEW.Registry({
  parent: Site,
  selector: 'main section.gear',
  namespace: 'gear.',

  references: {
    sections: 'section.collapsible'
  },

  init: function init() {
    var _this = this;

    this.on({
      sections: {
        'collapse-all': function collapseAll() {
          return _this.ref.sections.eachClassList.remove('open');
        }
      },

      'open-section': {
        set: function set(section) {
          _this.emit('sections.collapse-all');
          section.classList.add('open');
        }
      }
    });

    var sections = this.ref.sections;


    Site.gear = this.self.element;

    sections.each(function (section) {
      var header = section.querySelector('h3');
      header.addEventListener('click', function () {
        if (section.classList.contains('open')) {
          return _this.emit('sections.collapse-all');
        }

        _this.emit('open-section.set', section);
      });
    });
  }
});