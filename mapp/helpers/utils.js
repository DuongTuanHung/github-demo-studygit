const ItemsModel = require(__path_schemas + "items");

// tạo form để lọc
let createFilterStatus = async (currentStatus) => {
  let statusFilter = [
    { name: "All", value: "all", count: 2, class: "default" },
    { name: "Active", value: "active", count: 3, class: "default" },
    { name: "InActive", value: "inactive", count: 4, class: "default" },
  ];
  // cập nhập lại count
  for (let index = 0; index < statusFilter.length; index++) {
    let item = statusFilter[index];
    let condition = item.value !== "all" ? { status: item.value } : {};
    if (item.value === currentStatus) statusFilter[index].class = "success";

    await ItemsModel.count(condition).then((data) => {
      statusFilter[index].count = data;
    });
  }
  return statusFilter;
};

module.exports = {
  createFilterStatus: createFilterStatus,
};
