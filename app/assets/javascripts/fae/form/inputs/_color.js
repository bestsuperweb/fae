/* global Fae, colorpicker, FCH */

/**
 * Fae form color
 * @namespace form.color
 * @memberof form
 */

Fae.form.color = {
  init: function() {
    this.initColorpicker();
  },

  /**
   * Initialize colorpicker
   */
  initColorpicker: function() {
    var settings = {
      margin: '5px 0',
      customBG: '#222',
      positionCallback: function($elm) {
        var inputOffset = $elm.offset().top;
        var distanceToBottom = $(document).height() - inputOffset;
        var top = distanceToBottom <= this.$UI._height ? 400 : inputOffset + $elm.innerHeight();

        return { left: 30, top: top }
      }
    }

    $('.color').colorPicker(settings);
  }
};
