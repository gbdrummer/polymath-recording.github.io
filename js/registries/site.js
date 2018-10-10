'use strict';

var Site = new NGNX.VIEW.Registry({
  selector: '.polymath',
  namespace: 'site.',

  references: {
    smoothScrollLinks: 'a[data-section]'
  },

  init: function init() {
    this.ref.smoothScrollLinks.on('click', function (evt) {
      evt.preventDefault();
      var link = evt.target;

      document.getElementById(link.dataset['section']).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
    });
  }
});