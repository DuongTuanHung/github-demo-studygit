import { DH_CHECK_P_NOT_SAFE_PRIME } from "constants";

//// Bai 11 Express generator
// review về tạo express và cách render cơ bản hết ra của express

//// Bài 12 Express struct
// file bin: tao server port
//public ảnh stylist
// router để phân trang
// view tạo trang hiển thị

// Bài 13 Nodemon
// npm install -g nodemon

//// Bài 14 Router
// app.use tạo trang để phân router

//// Bài 15 View su dung
// download sb admin 2
// CRUD Create Read Update Delete Sorting filter search pagination
// item/list
// item/add
// item/edit/12
// item/delete
// item/list

// router.get('/1', function(req, res, next) {          /1 tên trang hiện trên url
//     res.render('2', { title: 'dashboard Page' });    /2 tên file link đến từ folder views
//   });
// trong mô hình MVC thì router ứng với controler, views ứng với V

//// Bài 16 View Include
//

//// Bài 18 Template 2
// ../ tạo đường dẫn
// <base href="/"> sửa lỗi chỉ hiện đường dẫn
// cần chú ý khi tách phân trang sao cho hợp lí dễ sửa code
// tạo folder pages trong view để quản lý trang

//// Bài 19 Template 3
// phân trang nhờ page-title điều khiển tên trang nhờ router
// html format
// ejs.co

//// Bài 20 Template 4
// express-ejs-layout
// npm install express-ejs-layouts
// chia code app thư viện mã ban đầu đến thư viện thêm xong đến những cái import vào
// var expressLayouts = require('express-ejs-layouts');
// app.use(expressLayouts);

//// Bài 21 Template 5
// sửa lỗi app.set('layout', 'layouts/layout');
// layout content của từng page 1 nhờ <%- body %> hút hết nội dụng của trang đó vào form được tạo sẵn
// trong trang chứa <%- body %> để các trang khác không phải lặp lại các phần khác
// <%- để in ra mã html

//// Bài 22 Setup router 01
// app điều khiển server
// views tạo nội dung
// routes điều khiển để phân trang
// trong routes thì dashboard.js dùng phương thức get để truy xuất đến địa chỉ trong view để render ra nội dung tương úng
// trong views gồm các content của web ứng với mỗi phần trong được điều khiển từ router

//// Bài 23 Setup router 02
// chỉ là sửa đường dẫn
// tạo backend và front end để dễ quản lý giúp app.js đỡ dài
// router.use('/', require('./home')); sử dụng để từ app có thể sử dụng đc router này từ đó điều khiển các router khác từ router này
//

//// Bài 24 Frefix admin
// tạo configs folder
// app.locals.prefixAdmin = systemConfig; dùng để bảo mật trang chủ mỗi khi cần thay url, prefix là name đặt theo ý
// `/${systemConfig.prefixAdmin}` chú ý dấu `` dùng cho es6

//// Bài 25 Error Page
//

//// Bài 26 Review
//

//// Bài 27 Mlab
//

//// Bài 28 Mongodb connect
//

//// Bài 29 Mongodb Quickstart
// var kittySchema = new mongoose.Schema({ tạo schema cho đối tượng
//   name: String                          những thuộc tính
// });
// var Kitten = mongoose.model('Kitten', kittySchema); biên dịch tạo model
// var silence = new Kitten({ name: 'nodejs' }); tạo model mới có thuộc tính mới
// silence.save(function (err, silence) {   lưu model mới lại vào database
//     if (err) return console.error(err);
//   });

//// Bài 30 Mongoose base
// ItemsModel.find({}, function(err, items){
//     console.log(err);                        truy vấn đối tượng
//     console.log(items);    đối tượng lấy ra từ
//   });                    mongoose.model("items",schema);
//

//// Bài 31 Get items
// ItemsModel.find({}).then((items) => {
//     console.log(items);     // in ra items
//   });
//
// ItemsModel.find({}).then((items) truy xuất ra phần tử
// <h3><%= JSON.stringify(items) %></h3> đọc data dưới dang json
//

//// Bài 32 forEach
// <% items.forEach((item, index) => { %>   for trong ejs
// <% }) %>
//
// <% if(item.status == 1) { %>
// <% } else if (item.status == 0) { %>     Cấu trúc if
// <% } %>

//// Bài 33 Status helpers
// tạo folder helpers để điều chỉnh trạng thái rồi include vào list.ejs rút gọn code
// chú ý cấu trúc của ejs

//// Bài 34 Show Status filter
// name: 'All', count: 4, link: '#', class: default
// <% statusFilter.forEach((item) => { %>
//     <a class="btn m-b-sm btn-success btn-sm" href="admin123/item/all">
//         <%= item.name + "(" + item.count + ")" %>
//     </a>
// <% }) %>
// <%= item.name.toUpperCase() + " (" + item.count + ") " %>   viết chữ in hoa
//

//// Bài 35 Count by Status
// mongoose.model("items",schema); items - tên collection chọn
//
// statusFilter.forEach((item, index) => {
//     ItemsModel.count({status: item.value}).then((data) => {  phương thức đếm trong mongo chọn thuộc tính
//         statusFilter[index].count = data;                    ({status: item.value})
//     });                                                      cập nhật lại giá trị count đếm được
// });                                              với từng đối tượng theo thứ tự
//
// let condition = {};
// if(item.value !== "all") condition = {status: item.value};   nếu đang xét tới "all" thì đếm tất cả
//         ItemsModel.count(condition).then((data) => {         nếu khác thì đến các giá trị tuong ứng
//             statusFilter[index].count = data;
//

//// Bài 36 Helper show filter Status
// tạo file filter-status để tối ưu code giống 33

//// Bài 37 Helper create filter Status
// tạo folder helpers để giảm thiểu code cho item.js ở router

//// Bài 38 Router Status
// tạo link cho all, active, inactive
// '/:status' in ra link tương ứng
// '(/:status)?'  gelner refaction - có cũng được không có cũng đc
//

//// Bài 39 Active filter
// xử lí req từ url để truyền vào active inactive tương ứng
// req.params.status        lấy req truyền vào

//// Bài 40 List by status
// xây dựng chức năng all, active inactive hiển thị đúng số lượng

//// Bài 41 getParam
// req.params.hasOwnProperty('status')    check xem có đối tượng status hay không
// tạo file param.js
// getParam = (param, property, defaultValue) - (phương thức, đối tượng, giá trị của đối tượng)
// chú ý check underfined
// param[property]  chú ý cách viết tương đồng với a.b

//// Bài 42 filter status error
//

//// Bài 43 submit keyword
// req.query phương thức query đưa ra dưới dạng json của đối tượng req

//// Bài 44 Search Normal
// sử dụng cấu trúc if để giải quyết

//// Bài 45 Search REI
// mongoose regular expression - key
// mongoose regux find tìm kiếm
// {name: { $regex: keyword, $options: 'i' }} - i là kiểu không phân biệt chữ in thường

//// Bài 46 clear & reset
// sửa nút clear và reset gắn thêm link vào

//// Bài 47 update filter status
// sử dụng '?keyword=' để chuyển status không bị mất keyword

//// Bài 48 Demo

//// Bài 49 Sort helper
// return `html` // render ra ma html
// <%- %>           dùng cho biển là hàm

//// Bài 50 fix helper
// "${link}"        // thế này vẫn được
// tận dung return để tối ưu code loại bỏ <%%>

//// Bài 51 list by page
// .skip(a)             //  a là vị trí của phần tử đã sắp xếp theo .sort()

//// Bài 52 total item
// totalIteams      // số phần tử

//// Bài 53 Number 1
// Math.ceil()         // làm tròn

//// Bài 54 Number 2
// test để xác đinh công thức cho từng phần tử của pagination

//// Bài 55 start previous
//  chú ý chuyển xhtml = ``

//// Bài 56 Next End
// class trong <li> để active

//// Bài 57 Pages
//  ${i+}

//// Bài 58 pagerange 1
// xây dựng giải thuật để xử lý pages dùng min và max để bọc đầu

//// Bài 59 pagerange 2
// min = currentPage - middle + 1 => chia nhóm đặt điều kiện
// max = min + pageRanges - 1

//// Bài 60 Fix pagination
// giữ lại trạng thái trong lúc phân trang

//// Bài 61 Link pagination
// thêm keyword và currentStatus vào link

//// Bài 62 Link Change Status
// Thay đổi status khi click
// list.ejs => click A change status => change status admin/items/change-status/:id/active
// tạo link lấy ra id khi click

//// Bài 63 change status 01
// save()  để lưu vào database
// res.redirect('link')     trả về link khi có action
// updateOne({ _id: id }, { status: status }, (err, result) => {res.redirect('link')});
//          địa chỉ id      phần tử cần thay đổi - hàm để redirect action => ngắn gọn =>> use

//// Bài 64 change status 02
// thêm prefixAdmin vào link

//// Bài 65 Delete Items
// thêm linkIndex
// deleteOne()   để xóa phần tử theo id

//// Bài 66 change multi status 01
// chọn những phần tử để change => chọn hành động => click apply
// read custom.js on folder js
// slb_selector         // lấy link
// form_selector        // submit link
// id_btn_action        // xác định có id hay không để button apply có thể action

//// Bài 67 change multi status 02
// thêm id vào value
// express tích hợp body-parse rồi
// req.body     để in ra thuộc tính

//// Bài 68 change multi status 03
// $in giải gía trị trong mảng cần update
// ItemsModel.updateMany(
//     { _id: { $in: req.body.cid } },
//     { status: currentStatus },       // trường cần apdatate
//     (err, result) => {
// dùng .post để lấy id

//// Bài 69 Delete Items multi
// remove giống change

//// Bài 70 Change ordering 01
// thay đổi trong custom.js
// ckbAll.click(function () {
//     $("input:checkbox").not(this).prop("checked", this.checked);
//     if ($(this).is(":checked")) {
//       $(".ordering").attr("name", "ordering");
//     } else {
//       $(".ordering").removeAttr("name");
//     }
//   });
// bỏ value trong ordering
// có 2 trường hợp ở id là 1 item và multi items

//// Bài 71 Change ordering 02
// if else để xử lý 2 trường hợp

//// Bài 72 Change ordering 02
// tạo action trong folder helper trong views để tối ưu code
// tối ưu sellect option
// chú ý hay mắc lỗi ở include và <%%>

//// Bài 73 show message 01
// search nodejs epress flash notification
// npm i express-flash-notification --save
// làm theo eg
// tạo flash trong folder views
// lưu message trong session
// config nodejs session: npm install express-session
// chú ý link truy cập k trùng (/:status)?

//// Bài 74 show message 02
// cắt list sáng flash để hiển thị
// false trong .false do k cần reder về file khác còn true ngược lại
// req.flash("success", "Thay đổi status thành công", false);

//// Bài 75 show message 03
// thêm số lượng phần tử hiển thị trên thông báo
// key affected
// result.n => số phần tử
// viewname: link đến file chưa flash

//// Bài 76 add item 01
// thêm pageTitleAdd
// 2 trường hợp edit và add dùng chung form

//// Bài 77 add item 02
// <%= (item.status) == 'active'? 'selected = "selected"' : '' // điều kiện để hiển thị status
// hiển thị phần tử có

//// Bài 78 add item 03
// thêm mới phần tử
// save() insert thêm mới

//// Bài 79 add item 04
// fix err req.body hasOwnProperty
// fix lại link status
// để ý name='odering'
//ItemsModel(item).save().then(()) lưu vào database

//// Bài 80 install
// validator để cài đặt kiểm tra phần nhập vào
// npm install express-validator
//  req.checkBody('name', "không được rỗng") // check lại body với điều kiện
// isLength()           // kiểm tra chiều dài
// req.validationErrors()          // kiểm tra xem có lỗi hay không nếu k thì hiển thị ra false

//// Bài 81 Validator 01
// isInt({ gt: 0 })    // kiểm tra có phải số không
// tạo hàm riêng trong validator để xử lý status
// customValidator: {}      // để tạo hàm

//// Bài 82 Validator 02
// tạo folder validates để tối ưu
// tách và tạo file items trong folder

//// Bài 83 Show Error
//  let item = Object.assign(req.body);   // copy hết thuộc tính vào item
// tạo file error trong elelment để tối ưu
// error.param.charAt(0).toUpperCase() + error.param.slice(1)  // in ra chữ in hoa

//// Bài 84 Complete
// chỉnh sửa phần thêm mới
// let item = {
//   name: ParamHelpers.getParam(req.body, "name", ""),
//   odering: ParamHelpers.getParam(req.body, "odering", 0),
//   status: ParamHelpers.getParam(req.body, "status", "active"),       ĐƯỢC THAY BẰNG
// };                                           let item = Object.assign(req.body);

//// Bài 85 Edit item 01
// route.(/save)        // phân biệt khi nào là add khi nào là edit
// edit thì có id còn add thì không
// thêm id vào value submit để phân biệt

//// Bài 86 Edit item 02
// chỉnh sửa lưu lại edit khi thay đổi

//// Bài 87 notify 01
// tạo file notify trong folder config
// module hóa thông báo

//// Bài 88 notify 02
// docs nodejs tìm module ulti hỗ trợ %s
// util.format(câu chứa %d, giá trị truyền vào %d),

//// Bài 89 notify 03
// thay đổi cách viết trong validates
// viết theo util.format()

//// Bài 90 folder view
// tạo const folderView = "pages/items/";  để lưu tại res.render

//// Bài 91 Database config
// tạo file Database trong folder Configs để tối ưu link mongodb và schema

//// Bài 92 View 01
// thêm biến chứa link để tối ưu ở list

//// Bài 93 View 02
// giống 92 ở form

//// Bài 94 Path 01
// search nodejs define path
// sử dụng global
// global.__base = __dirname + "/";
// global.__path_configs = __base + "/app/configs/";
//          link            Chuỗi

//// Bài 95 path 02
// thay đổi link sửa theo lỗi  hiển thị
// đổi tên app thành mapp để test path

//// Bài 96 path 03
// thêm file path để lấy tạo tập tên folder tối ưu path

//// Bài 97 fix filter status
// Thay thể đoạn code sau để tối ưu
// if (currentStatus === "all") {
//     if (keyword !== "") {
//       objWhere = { name: { $regex: keyword, $options: "i" } };
//     }
//   } else {
//     objWhere = {
//       status: currentStatus,
//       name: { $regex: keyword, $options: "i" },
//     };
//   }

//// Bài 98 pagination
// sửa totalpagination
// search js đông bộ bất đồng bộ hoặc js async await hoặc promise
// sử dụng async await
// áp dung async vào hàm cần làm và await vào hàm cần thực hiện trước

//// Bài 99 fix filter status 02
// fix số hiện sau status
// async await in foreach
// để ý chạy code từng file require vào xem đã chạy xong chưa để thêm await

//// Bài 100 pushlish
//  heroku logs
