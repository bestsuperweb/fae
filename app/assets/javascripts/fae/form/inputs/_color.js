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
        cssAddon: // could also be in a css file instead
          '.cp-color-picker{border:1px solid #999; padding:10px 10px 0;' +
            'background:#eee; overflow:visible; border-radius:3px;}' +
          '.cp-xy-slider:active {cursor:none;}' +
          '.cp-xy-slider{border:1px solid #999; margin-bottom:10px;}' +
          '.cp-xy-cursor{width:12px; height:12px; margin:-6px}' +
          '.cp-z-slider{margin-left:10px; border:1px solid #999;}' +
          '.cp-z-cursor{border-width:5px; margin-top:-5px;}' +
          '.cp-color-picker .cp-alpha{margin:10px 0 0; height:6px; border-radius:6px;' +
            'overflow:visible; border:1px solid #999; box-sizing:border-box;' +
            'background: linear-gradient(to right, rgba(238,238,238,1) 0%,rgba(238,238,238,0) 100%);}' +
          '.cp-color-picker .cp-alpha{margin:10px 0}' +
          '.cp-alpha-cursor{background: #eee; border-radius: 100%;' +
            'width:14px; height:14px; margin:-5px -7px; border:1px solid #666!important;' +
            'box-shadow:inset -2px -4px 3px #ccc}',
        positionCallback: function($elm) {
          var distanceToBottom = $(document).height() - $elm.offset().top;
          var top = distanceToBottom <= this.$UI._height ? 400 : $elm.offset().top + $elm.innerHeight();
          return { left: 30, top: top }
        }
      }

      $('.color').colorPicker(settings);
    }
  };
