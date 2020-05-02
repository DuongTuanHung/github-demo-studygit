var express = require("express");
var router = express.Router();

const folderView = __path_views + "pages/puclish/";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render(`${folderView}index`, { pageTitle: "home page" });
});

module.exports = router;
