describe('Readle', function() {
  beforeEach (function() {
    $('#jasmine_content').html('<div class="hello">hi there</div>')
  });

  it('should have an option to toggle highlighting mode', function() {

  });

  it('hoho', function() {
    expect(Readle.helloWorld()).toBe('hello world');
  });
});
