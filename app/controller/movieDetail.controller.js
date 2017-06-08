var movie = require('../model/movie');
exports.getDetail = function(req, res) {
   var moviename = req.body.moviename;
   console.log(moviename);
   movie.find({moviename: moviename}, function(err, movies) {
    if (err) {
      console.log('ERROR IN FIND: ' + err);
      return res.json({err: 'Error happens while finding...'});
    } else if (movies.length === 0) {
      return res.json({err: 'moviename is wrong...'});
    } else {
          return res.json({introduction: movies[0].introduction});
        }
    });
};