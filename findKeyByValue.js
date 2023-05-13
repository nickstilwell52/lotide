const findKeyByValue = function(genreList,favoriteShow) {
  for (const [genre, shows] of Object.entries(genreList)) {
    if (shows === favoriteShow) {
      return genre;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;