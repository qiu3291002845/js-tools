"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
// 大写字符串 -- 将字符串转化为大小字母
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
exports.capitalize = capitalize;
