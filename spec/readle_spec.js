describe('Readle', function() {
  beforeEach (function() {
    $('#jasmine_content').html(
      '<p>Hello there I should be highlighted.</p>' +
        '<p>I should not be highlighted</p>' +
        '<p>Hello there I should also be highlighted.</p>'
    )
  });

  describe('highlightSelectedText', function() {
    describe('while selecting the word "Hello" from the first paragraph', function() {
      it('should highlight all paragraphs that have that word', function() {
        var selObj = {
          anchorOffset: 0,
          baseOffset: 0,
          extentOffset: 11,
          focusOffset: 11,
          rangeCount: 1,
          type: "Range",
          toString: function() {
            return "Hello there";
          }
        }

        spyOn(Readle,'_getSelection').and.returnValue(selObj);

        Readle.highlightSelectedText();

        expect($('p:contains("Hello there")').attr('style')).
          toBe("background: yellow;");
      });
    });
  });
});
