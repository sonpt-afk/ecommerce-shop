"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.corsOptions = void 0;
var _environment = require("./environment.js");
var _httpStatusCodes = require("http-status-codes");
// import { WHITELIST_DOMAINS } from '~/utils/constants'

// import ApiError from '~/utils/ApiError'

// Cấu hình CORS Option trong dự án thực tế (Video số 62 trong chuỗi MERN Stack Pro)
var corsOptions = exports.corsOptions = {
  origin: function origin(_origin, callback) {
    // Nếu môi trường là local dev thì cho qua luôn
    if (_environment.env.BUILD_MODE === 'dev') {
      return callback(null, true);
    }

    // Ngược lại thì hiện tại code chúng ta đang làm còn 1 trường hợp là:
    // env.BUILD_MODE === 'production'

    // Kiểm tra xem origin có phải là domain được chấp nhận hay không
    // if (WHITELIST_DOMAINS.includes(origin)) {
    //   return callback(null, true)
    // }

    // Cuối cùng nếu domain không được chấp nhận thì trả về lỗi
    // return callback(new ApiError(StatusCodes.FORBIDDEN, `${origin} not allowed by our CORS Policy.`))
  },
  // Some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200,
  // CORS sẽ cho phép nhận cookies từ request, (Nhá hàng :D | Ở khóa MERN Stack Advance nâng cao học trực tiếp mình sẽ hướng dẫn các bạn đính kèm jwt access token và refresh token vào httpOnly Cookies)
  credentials: true
};