var Readle = {
  helloWorld: function helloWorld() {
    return 'hello world';
  },

  highlightSelectedText: function highlightSelectedText() {
    var selection = this._getSelection();
    var anchorNode = selection.anchorNode;
    var selectionString = this._getSelection().toString();

    var anchorDOM = $('p:contains("' + anchorNode.wholeText + '")')
    var anchorParHTML = anchorDOM.html();
    var wrappedSelString = '<span class="readle-highlighting">'+ selectionString+ '</span>'

    anchorDOM.html(anchorParHTML.replace(selectionString, wrappedSelString))
    $('span.readle-highlighting').css('background', 'yellow')
  },

  _getSelection: function _getSelection() {
    return document.getSelection();
  }
}
