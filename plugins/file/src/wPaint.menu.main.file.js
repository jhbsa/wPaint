(function ($) {
  var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAASCAMAAAAnpt3PAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsSAAALEgHS3X78AAAAFnRFWHRDcmVhdGlvbiBUaW1lADA4LzE3LzEzDZfY9QAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAABUUExURf///0ZGN0ZGN0ZGN0ZGN0ZGN0lJOk5OQFFRQl5eT19fUmRkVWVlVmdnW21tXnJyZ3Z2Z3d3aImJgJqakqCgmLS0rra2scXFwM3NydjY1e/v7vr6+hfSp8cAAAAFdFJOUwAQMIDQC0n+IQAAAN5JREFUKM/Fk0ESwiAMRauCLSiWINVU7n9Pm0BaupDRlX/B4k1ehpC263IOSh26Oie95NQm3VFprY4/aJ5yOxM63/xKvCFifCZAyQR81hDx3mtOfxGCGAgE5CJIlEgkJli1EBwhF8xP2r7oa22bhENEJqF40qAmkDXpjdxjOUB6JzboqGs+aSaORMYYRTMyf2hoV13yEG0l94YG80BkmLdLTrylfmpdEtK83MnN9WyT1dpO2NbSy7lXqjV8WvtE0cqTr2GQN1UC/HHVNfXKRdsWLBqTv2u7bL9KSW60yxsX6zeQEF+JDwAAAABJRU5ErkJggg==';

  // extend menu
  $.extend(true, $.fn.wPaint.menus.main.items, {
    save: {
      icon: 'generic',
      title: 'Save Image',
      img: img,
      index: 0,
      callback: function () {
        this.options.saveImg.apply(this, [this.getImage()]);
      }
    },
    loadBg: {
      icon: 'generic',
      group: 'loadImg',
      title: 'Load Image to Foreground',
      img: img,
      index: 2,
      callback: function () {
        this.options.loadImgFg.apply(this, []);
      }
    },
    loadFg: {
      icon: 'generic',
      group: 'loadImg',
      title: 'Load Image to Background',
      img: img,
      index: 1,
      callback: function () {
        this.options.loadImgBg.apply(this, []);
      }
    }  
  });

  // extend defaults
  $.extend($.fn.wPaint.defaults, {
    saveImg: null,   // callback triggerd on image save
    loadImgFg: null, // callback triggered on image fg
    loadImgBg: null  // callback triggerd on image bg
  });

  // extend functions
  $.fn.wPaint.extend({
    _showFileModal: function (type, images) {
      var _this = this,
          $content = $('<div></div>'),
          $img = null;

      function appendContent(type, image) {
        function imgClick(e) {

          // just in case to not draw on canvas
          e.stopPropagation();
          if (type === 'fg') { _this.setImage(image); }
          else if (type === 'bg') { _this.setBg(image, null, null, true); }
        }

        $img.on('click', imgClick);
      }

      for (var i = 0, ii = images.length; i < ii; i++) {
        $img = $('<img class="wPaint-modal-img"/>').attr('src', images[i]);
        $img = $('<div class="wPaint-modal-img-holder"></div>').append($img);

        (appendContent)(type, images[i]);

        $content.append($img);
      }

      this._showModal($content);
    }
  });
})(jQuery);