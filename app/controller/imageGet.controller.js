var path = require('path');
var config = require('../../config/config');
exports.imageGet = function(req, res) {
    console.log(req.params.image);

  // 将电影的图片发送回去
  res.sendFile(path.resolve(__dirname + config.IMAGE + req.params.image), function(err) {
    if (err) {
      console.log('ERROR IN SENDING IMAGE: ' + err);
      return res.status(404).end();
    } else {
      return console.log('SENDING IMAGE SUCCESSFULLY...');
    }
  });
};