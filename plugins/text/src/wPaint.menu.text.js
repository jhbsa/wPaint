(function ($) {

  // setup menu
  $.fn.wPaint.menus.text = {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAASCAMAAAAnpt3PAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAArrAAAK6wGCiw1aAAAAFnRFWHRDcmVhdGlvbiBUaW1lADA4LzEwLzEzkEDgTAAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAADkUExURUxMTP///0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTO2jd1cAAABLdFJOUwAAAgUJDA8TFxobHyQoLTE0Njg7QEVGR0pPWl9kaGpsb3p7hYiKj5CVl5qcn6SmqrG4ub3BwsnLzNPb3+Ll5ufp7O/x8/b5+vv8/o2LDuoAAAEpSURBVCjPndPZUsJQDAbgvxVpPSBYPW6AuBYVRQTErYhAqUj/938fLzq2acelQ+7OTL5JTjKBsVLAMAxLKVXROxYA/JJmKqWUDcBWSlkRcydk4AX0DyQ7GpHv5+vRY+3Q45MGoDvsVCMGLFgCmgyrslqdw6QpNFkGAGAGfLOACoDHrmSn7KaYipiXZQP2JGvxMhebsSbZHRs5WHnAWzmSjee37X8ZSY61ZHvzvpmjWqkV0hXsjG0j198aDO0k84YXabYJADAnWWYuWU8y73ksWYVXAIBaN8sQCGY+zvclw0t4AsCZ2llmySa3Jg8qxQq9cOH5ryXEzFyyAlgjtpORuLw2UgwoOLoIxMz1yU9vHE7r8QJ0/4Mc7grIJMThVLVT/ONwfrq3FeIL3LIwQskEl6kAAAAASUVORK5CYII=',
    items: {
      bold: {
        icon: 'toggle',
        title: 'Bold',
        index: 0,
        callback: function (toggle) { this.setFontBold(toggle); }
      },
      italic: {
        icon: 'toggle',
        title: 'Italic',
        index: 1,
        callback: function (toggle) { this.setFontItalic(toggle); }
      },
      /*underline: {
        icon: 'toggle',
        title: 'Undelrine',
        index: 2,
        callback: function (toggle) { this.setFontUnderline(toggle); }
      },*/
      fontSize: {
        title: 'Font Size',
        icon: 'select',
        range: [8, 10, 12, 14, 16, 20, 24, 30, 36, 42, 48],
        value: 20,
        callback: function (size) { this.setFontSize(size); }
      },
      fontFamily: {
        icon: 'select',
        title: 'Font Family',
        range: ['Arial', 'Courier', 'Times', 'Verdana'],
        useRange: true,
        value: 'Arial',
        callback: function (family) { this.setFontFamily(family); }
      }
    }
  };

  // add icon to main menu
  $.fn.wPaint.menus.main.items.text = {
    icon: 'menu',
    after: 'pencil',
    title: 'Text',
    index: 7,
    callback: function () { this.setMode('text'); }
  };

  // extend defaults
  $.extend($.fn.wPaint.defaults, {
    fontSize       : '20',    // current font size for text input
    fontFamily     : 'Arial', // active font family for text input
    fontBold       : false,   // text input bold enable/disable
    fontItalic     : false,   // text input italic enable/disable
    fontUnderline  : false    // text input italic enable/disable
  });

  // extend functions
  $.fn.wPaint.extend({
    generate: function () {
      this.$textCalc = $('<div></div>').hide();

      // make sure clicking on the text-tnput doesn't trigger another textInput
      this.$textInput = $('<textarea class="wPaint-text-input" spellcheck="false"></textarea>')
      .on('mousedown', this._stopPropagation) 
      .css({position: 'absolute'})
      .hide();
      
      $('body').append(this.$textCalc);
      this.$el.append(this.$textInput);

      this.menus.all.text = this._createMenu('text');
    },

    _init: function () {
      var _this = this;

      function inputClick() {
        _this._drawTextIfNotEmpty();
        _this.$textInput.hide();
        _this.$canvasTemp.hide();
      }

      // in case we click on another element while typing - just auto set the text
      for (var i in this.menus.all) {
        this.menus.all[i].$menu
        .on('click', inputClick)
        .on('mousedown', this._stopPropagation);
      }

      // same idea here for clicking outside of the canvas area
      $(document).on('mousedown', inputClick);
    },

    /****************************************
     * setters
     ****************************************/
    // setFillStyle: function (fillStyle) {
    //   this.$textInput.css('color', fillStyle);
    // },

    setStrokeStyle: function (strokeStyle) {
      this.$textInput.css('color', strokeStyle);
    },

    setFontSize: function (size) {
      this.options.fontSize = parseInt(size, 10);
      this._setFont({fontSize: size + 'px', lineHeight: size + 'px'});
      this.menus.all.text._setSelectValue('fontSize', size);
    },

    setFontFamily: function (family) {
      this.options.fontFamily = family;
      this._setFont({fontFamily: family});
      this.menus.all.text._setSelectValue('fontFamily', family);
    },

    setFontBold: function (bold) {
      this.options.fontBold = bold;
      this._setFont({fontWeight: (bold ? 'bold' : '')});
    },

    setFontItalic: function (italic) {
      this.options.fontItalic = italic;
      this._setFont({fontStyle: (italic ? 'italic' : '')});
    },

    setFontUnderline: function (underline) {
      this.options.fontUnderline = underline;
      this._setFont({fontWeight: (underline ? 'underline' : '')});
    },

    _setFont: function (css) {
      this.$textInput.css(css);
      this.$textCalc.css(css);
    },

    /****************************************
     * Text
     ****************************************/
    _drawTextDown: function (e) {
      this._drawTextIfNotEmpty();
      this._drawShapeDown(e, 1);

      this.$textInput
      .css({left: e.pageX - 1, top: e.pageY - 1, width: 0, height: 0})
      .show().focus();
    },
    
    _drawTextMove: function (e) {
      this._drawShapeMove(e, 1);

      this.$textInput.css({left: e.left - 1, top: e.top - 1, width: e.width, height: e.height});
    },

    _drawTextIfNotEmpty: function () {
      if (this.$textInput.val() !== '') { this._drawText(); }
    },

    // just draw text - don't want to trigger up here since we are just copying text from input box here
    _drawText: function () {
      var fontString = '',
          lines = this.$textInput.val().split('\n'),
          linesNew = [],
          textInputWidth = this.$textInput.width() - 2,
          width = 0,
          lastj = 0,
          offset = this.$textInput.position(),
          left = offset.left + 1,
          top = offset.top + 2, // was +1
          //underlineOffset = 0,
          i, ii, j, jj, lastWrappingIndex, curChar;
      if (this.options.fontItalic) { fontString += 'italic '; }
      //if(this.settings.fontUnderline) { fontString += 'underline '; }
      if (this.options.fontBold) { fontString += 'bold '; }
      
      fontString += this.options.fontSize + 'px ' + this.options.fontFamily;

      // updated code to simulate textblock wrapping
      lastWrappingIndex = -1;
      for (i = 0, ii = lines.length; i < ii; i++) { // for each line (assuming there may already be hard returns \n)
        this.$textCalc.html('');
        lastj = 0;
        if (lines[i].length === 0) { // handle newline / linebreak
          linesNew.push('');
          continue;
        }
        
        for (j = 0, jj = lines[i].length; j < jj; j++) { // chew through the line looking for last break opportunity before width constraint
          curChar = lines[i].charAt(j)
          if (curChar === ' ' || curChar === '-' || curChar === '+') {
            lastWrappingIndex = j;
          }
          width = this.$textCalc.append(curChar).width();
          if (width > textInputWidth) {
            if (lastWrappingIndex >= 0) {
              linesNew.push(lines[i].substring(lastj, lastWrappingIndex).trim()); // left trim: .replace(/^\s+/g, '')
              lastj = lastWrappingIndex;
              lastWrappingIndex = -1;
            } else { // there was no natural wrap point
              linesNew.push(lines[i].substring(lastj, j).trim());
              lastj = j;
            }
            this.$textCalc.html('').append(lines[i].substring(lastj, j)); // may be buffered text from multiple wraps
          }
        }
        
        if (lastj !== j) {
          linesNew.push(lines[i].substring(lastj, j).trim());
        }
      }

      lines = this.$textInput.val(linesNew.join('\n')).val().split('\n');

      for (i = 0, ii = lines.length; i < ii; i++) {
        this.ctx.fillStyle = this.options.strokeStyle;
        this.ctx.textBaseline = 'top';
        this.ctx.font = fontString;
        this.ctx.fillText(lines[i], left, top);
        
        top += this.options.fontSize;
      }

      this.$textInput.val('');
      this._addUndo();
    }
  });
})(jQuery);
