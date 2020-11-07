var path = require("path");




module.exports = function(app) {
    //Home page/Index page
      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      })
 
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
      });

      app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
      })
};
    