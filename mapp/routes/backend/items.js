var express = require("express");
var router = express.Router();
const util = require("util");

const ItemsModel = require(__path_schemas + "items");
const UtilsHelpers = require(__path_helpers + "utils");
const ParamHelpers = require(__path_helpers + "params");
const systemConfig = require(__path_configs + "system");
const notify = require(__path_configs + "notify");
const validateItems = require(__path_validates + "items");

const linkIndex = "/" + systemConfig.prefixAdmin + "/items/";
const pageTitleIndex = "Item Management";
const pageTitleAdd = pageTitleIndex + " - Add";
const pageTitleEdit = pageTitleIndex + " - Edit";
const folderView = __path_views + "pages/items/";

// List Items
router.get("(/status/:status)?", async (req, res, next) => {
  let objWhere = {};
  let keyword = ParamHelpers.getParam(req.query, "keyword", "");
  let currentStatus = ParamHelpers.getParam(req.params, "status", "all");
  let statusFilter = await UtilsHelpers.createFilterStatus(currentStatus);

  let pagination = {
    totalItems: 1,
    totalPages: 2, // tổng số trang
    totalItemsPerPage: 5, // tổng số phẩn tử trên 1 trang
    currentPage: parseInt(ParamHelpers.getParam(req.query, "page", 1)), // được lấy tử url
    pageRanges: 3, // số page hiển thị ở cạnh Previous
  };

  // truy xuất trong DB và render đến link

  if (currentStatus !== "all") {
    objWhere.status = currentStatus;
  }
  if (keyword !== "") {
    objWhere.name = { $regex: keyword, $options: "i" };
  }

  await ItemsModel.count(objWhere).then((data) => {
    pagination.totalItems = data;
  });

  ItemsModel.find(objWhere)
    .sort({ odering: "desc" })
    .limit(pagination.totalItemsPerPage)
    .skip((pagination.currentPage - 1) * pagination.totalItemsPerPage)
    .then((items) => {
      res.render(__path_views + "pages/items/list", {
        pageTitle: "Item List Page",
        items: items,
        statusFilter: statusFilter,
        currentStatus,
        pagination,
        keyword,
      });
    });
});

// Change Status
router.get("/change-status/:id/:status", (req, res, next) => {
  let currentStatus = ParamHelpers.getParam(req.params, "status", "active");
  let id = ParamHelpers.getParam(req.params, "id", "");
  let status = currentStatus === "active" ? "inactive" : "active";

  ItemsModel.updateOne({ _id: id }, { status: status }, (err, result) => {
    req.flash("success", notify.CHANGE_STATUS_SUCCESS, false);
    res.redirect(linkIndex); // trả về respponse tương ứng
  });
});

// Change Status multi
router.post("/change-status/:status", (req, res, next) => {
  let currentStatus = ParamHelpers.getParam(req.params, "status", "active");
  ItemsModel.updateMany(
    { _id: { $in: req.body.cid } },
    { status: currentStatus },
    (err, result) => {
      req.flash(
        "success",
        util.format(notify.CHANGE_STATUS_MULTI_SUCCESS, result.n),
        false
      );
      res.redirect(linkIndex); // trả về respponse tương ứng
    }
  );
});

// Delete
router.get("/delete/:id", (req, res, next) => {
  let id = ParamHelpers.getParam(req.params, "id", "");

  ItemsModel.deleteOne({ _id: id }, (err, result) => {
    req.flash("success", notify.DELETE_SUCCESS, false);
    res.redirect(linkIndex); // trả về respponse tương ứng
  });
});

// Delete - multi
router.post("/delete", (req, res, next) => {
  ItemsModel.remove({ _id: { $in: req.body.cid } }, (err, result) => {
    req.flash(
      "success",
      util.format(notify.DELETE__MULTI_SUCCESS, result.n),
      false
    );
    res.redirect(linkIndex); // trả về respponse tương ứng
  });
});

// Change multi ordering
router.post("/change-ordering", (req, res, next) => {
  let cids = req.body.cid;
  let orderings = req.body.ordering;

  if (Array.isArray(cids)) {
    cids.forEach((item, index) => {
      ItemsModel.updateOne(
        { _id: item },
        { odering: parseInt(orderings[index]) },
        (err, result) => {}
      );
    });
  } else {
    ItemsModel.updateOne(
      { _id: cids },
      { odering: parseInt(orderings) },
      (err, result) => {}
    );
  }
  req.flash("success", notify.CHANGE_ODERING_SUCCESS, false);
  res.redirect(linkIndex);
});

// Form
router.get("/form(/:id)?", (req, res, next) => {
  let id = ParamHelpers.getParam(req.params, "id", "");
  let itemAdd = { name: "", odering: 0, status: "novalue" }; // default cho Add
  let errors = null;
  if (id === "") {
    // Add
    res.render(`${folderView}form`, {
      pageTitle: pageTitleAdd,
      item: itemAdd,
      errors,
    });
  } else {
    // Edit
    ItemsModel.findById({ _id: id }, (err, item) => {
      console.log(item);
      res.render(`${folderView}form`, {
        pageTitle: pageTitleEdit,
        item,
        errors,
      });
    });
  }
});

// Add
router.post("/save", (req, res, next) => {
  req.body = JSON.parse(JSON.stringify(req.body));
  validateItems.validator(req);

  let item = Object.assign(req.body);
  let errors = req.validationErrors();

  console.log(item);

  if (typeof item !== "undefined" && item.id !== "") {
    // Edit
    if (errors) {
      // have error
      res.render(`${folderView}form`, {
        pageTitle: pageTitleEdit,
        item: item,
        errors,
      });
    } else {
      // no error
      ItemsModel.updateOne(
        { _id: item.id },
        {
          name: item.name,
          odering: parseInt(item.odering),
          status: item.status,
        },
        (err, result) => {
          req.flash("success", notify.EDIT_SUCCESS, false);
          res.redirect(linkIndex); // trả về respponse tương ứng
        }
      );
    }
  } else {
    // Add
    if (errors) {
      // have error
      res.render(`${folderView}form`, {
        pageTitle: pageTitleAdd,
        item: item,
        errors,
      });
    } else {
      // no error
      new ItemsModel(item).save().then(() => {
        req.flash("success", notify.ADD_SUCCESS, false);
        res.redirect(linkIndex);
      });
    }
  }
});

// router.get('/edit', function(req, res, next) {
//   res.render('pages/items/edit', { pageTitle: 'Item edit Page'});
//   });
// router.get('/delete', function(req, res, next) {
//     res.render('pages/items/delete', { pageTitle: 'Item delete Page'});
//   });

module.exports = router;
