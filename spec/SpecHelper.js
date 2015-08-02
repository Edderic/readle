beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          };
        }
      };
    }
  });

  if ($('body #jasmine_content').length == 0) {
    $('body').prepend('<div id="jasmine_content"></div>')
  }
});
