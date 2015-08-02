var Readle = {
  helloWorld: function helloWorld() {
    return 'hello world';
  },

  highlightSelectedText: function highlightSelectedText() {
    var selectionString = this._getSelection().toString()

    $('p:contains("' + selectionString + '")').css('background', 'yellow');
  },

  _getSelection: function _getSelection() {
    return document.getSelection();
  }
}
