"use strict";
// 从数组中删除重复项
const removeDuplicates = (arr) => [...new Set(arr)];
// 洗牌数组重组 -- 使用排序和随机方法对数组进行洗牌非常容易。
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
// 检查数组是否为空 -- 检查数组是否为空的简单单行程序将返回 true 或 false。
const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0;
