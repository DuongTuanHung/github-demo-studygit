var createError = require("http-errors");
var express = require("express");
var path = require("path");
// var cookieParser = require("cookie-parser");
var logger = require("morgan");

var expressLayouts = require("express-ejs-layouts");
var mongoose = require("mongoose");

const pathConfig = require("./path");

// Define Path
global.__base = __dirname + "/";
global.__path_app = __base + pathConfig.folder_app;
global.__path_configs = __path_app + pathConfig.folder_configs;
global.__path_helpers = __path_app + pathConfig.folder_helpers;
global.__path_routers = __path_app + pathConfig.folder_routers;
global.__path_schemas = __path_app + pathConfig.folder_schemas;
global.__path_validates = __path_app + pathConfig.folder_validates;
global.__path_views = __path_app + pathConfig.folder_views;

const systemConfig = require(__path_configs + "system");
const DatabaseConfig = require(__path_configs + "database");

// connect MongoDB
mongoose.connect(
  `mongodb://${DatabaseConfig.username}:${DatabaseConfig.password}@ds047865.mlab.com:47865/${DatabaseConfig.database}`,
  { useNewUrlParser: true }
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongodb connect");
});

// flash notification
const flash = require("express-flash-notification");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const validator = require("express-validator");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", __path_views + "backend");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(cookieParser());

// config
app.use(cookieParser());
app.use(
  session({
    secret: "sadad",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(
  flash(app, {
    viewName: __path_views + "notification",
  })
);

app.use(
  validator({
    customValidators: {
      isNotEqual: (value1, value2) => {
        return value1 !== value2;
      },
    },
  })
);
app.use(express.static(path.join(__dirname, "public")));

// Local variable
app.locals.systemConfig = systemConfig;

// Setup Router
app.use(
  `/${systemConfig.prefixAdmin}`,
  require(__path_routers + "backend/index")
);
app.use("/", require(__path_routers + "frontend/index"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render(__path_views + "pages/error", { pageTitle: "File Not Found" });
});

module.exports = app;
