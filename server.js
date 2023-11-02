var express = require('express');
var path = require('path');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');


// It shows producer page
app.get('/', function(req, res) {
  var songs = [
    { title: 'Imagine', artist: "John Lennon", year: "1971" },
    { title: 'Hey Jude', artist: "The Beatles", year: "1968" },
    { title: 'London Calling', artist: "The Clash", year: "1980" },
    { title: 'Free Fallin', artist: "Tom Petty", year: "1989" },
    { title: 'Into the Mystic', artist: "Van Morrison", year: "1970" },
    { title: 'Paper Planes', artist: "M.I.A", year: "2008" },
    { title: 'Last Nite', artist: "The Strokes", year: "2001" }
  ];
  var note1 = "This area will show the selected dj and the songs in the music playlist.";
  var note2 = "Sample Playlist: ";

  res.render('pages/Producer', {
    songs: songs,
    note1: note1,
    note2: note2
  });
});


app.get('/Index', function(req, res) {
  res.render('pages/Index');
});

// Static external css files are linked, which are used by the index and producer page.
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080);
console.log('Server is listening on port 8080');