var Readle = {
  helloWorld: function helloWorld() {
    return 'hello world';
  },

  highlightSelectedText: function highlightSelectedText() {
    var selection = this._getSelection();
    var anchorNode = selection.anchorNode;
    var selectionString = this._getSelection().toString();

    $('p:contains("' + anchorNode.wholeText + '")').css('background', 'yellow');
  },

  _getSelection: function _getSelection() {
    return document.getSelection();
  }
}
