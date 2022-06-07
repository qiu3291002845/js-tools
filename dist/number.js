"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeStr = exports.average = exports.isEven = exports.numberToThousandths = exports.randomHexColor = void 0;
// 生成随机十六进制 -- 生成随机十六进制颜色。
const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`;
exports.randomHexColor = randomHexColor;
// 数字转千分位
const numberToThousandths = (number) => {
    // 转换为字符串数组
    const str = (number + '').split('.');
    const intList = str[0].split('');
    const floatStr = str[1] || '';
    let res = '';
    intList.reverse().map((item, index) => {
        if (index !== 0 && index % 3 === 0) {
            res = item + ',' + res;
        }
        else {
            res = item + res;
        }
    });
    const float = floatStr ? '.' + floatStr : '';
    return res + float;
};
exports.numberToThousandths = numberToThousandths;
// 检查一个数字是偶数还是奇数
const isEven = (num) => num % 2 === 0;
exports.isEven = isEven;
// 求数字的平均值 -- 使用 reduce 方法找到多个数字之间的平均值。
const average = (...args) => {
    return args.reduce((a, b) => a + b) / args.length;
};
exports.average = average;
// 去除数字之外的所有字符
const removeStr = (str) => {
    return Number(str.replace(/\D/g, ''));
};
exports.removeStr = removeStr;
