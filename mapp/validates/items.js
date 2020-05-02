const util = require("util");
const notify = require(__path_configs + "notify");

const options = {
  name: { min: 6, max: 30 },
  odering: { min: 5, max: 100 },
  status: { value: "novalue" },
};

module.exports = {
  validator: (req) => {
    req
      .checkBody(
        "name",
        util.format(notify.ERROR_NAME, options.name.min, options.name.max)
      )
      .isLength({ min: options.name.min, max: options.name.max });
    req
      .checkBody(
        "odering",
        util.format(
          notify.ERROR_ODERING,
          options.odering.min,
          options.odering.max
        )
      )
      .isInt({ gt: options.odering.min, lt: options.odering.max });
    req
      .checkBody("status", notify.ERROR_STATUS)
      .isNotEqual(options.status.value);
  },
};
