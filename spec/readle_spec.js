describe('Readle', function() {
  beforeEach (function() {
    $('#jasmine_content').html(
      '<p>Hello there I should be highlighted.</p>' +
        '<p>I should not be highlighted</p>' +
        '<p>Hello there I should not be highlighted.</p>'
    )
  });

  describe('highlightSelectedText', function() {
    describe('while selecting the word "Hello" from the first paragraph', function() {
      var selObj, anchorNode, focusNode

      beforeEach (function() {
        anchorNode = {
          wholeText: "Hello there I should be highlighted."
        }

        focusNode = {
          wholeText: "Hello there I should be highlighted."
        }

        selObj = {
          anchorOffset: 0,
          anchorNode: anchorNode,
          baseOffset: 0,
          extentOffset: 11,
          focusOffset: 11,
          rangeCount: 1,
          type: "Range",
          toString: function() {
            return "Hello there";
          }
        }
      });

      it('should not highlight all paragraphs that have that word', function() {
        spyOn(Readle,'_getSelection').and.returnValue(selObj);

        Readle.highlightSelectedText();

        expect($('p:contains("Hello there I should not be highlighted")').
          attr('style')).
          not.
          toBe("background: yellow;");
      });

      it('should highlight just sections', function() {
        spyOn(Readle,'_getSelection').and.returnValue(selObj);

        Readle.highlightSelectedText();

        expect($('span.readle-highlighting').attr('style')).
          toBe("background: yellow;");

        expect($('span.readle-highlighting').html()).
          toBe("Hello there");
      });
    });
  });
});
