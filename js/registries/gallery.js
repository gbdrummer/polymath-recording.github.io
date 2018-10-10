'use strict';

var Gallery = new NGNX.VIEW.Registry({
  parent: Site,
  selector: 'main section.gallery',
  namespace: 'gallery.',

  references: {
    slider: '.slider',
    previousButton: 'button.previous',
    nextButton: 'button.next'
  },

  init: function init() {
    var _ref = this.ref,
        slider = _ref.slider,
        previousButton = _ref.previousButton,
        nextButton = _ref.nextButton;


    Site.gallery = this.self.element;

    previousButton.on('click', function (evt) {
      return slider.element.previous();
    });
    nextButton.on('click', function (evt) {
      return slider.element.next();
    });
  }
});