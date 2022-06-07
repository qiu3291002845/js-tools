"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = exports.isDarkMode = exports.getSelectedText = exports.copyToClipboard = void 0;
// 复制到剪贴板 -- 使用 navigator.clipboard.writeText 轻松将任何文本复制到剪贴板。
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
};
exports.copyToClipboard = copyToClipboard;
// 获取选定的文本 -- 使用内置的 getSelectionproperty 获取用户选择的文本。
const getSelectedText = () => window.getSelection()?.toString();
exports.getSelectedText = getSelectedText;
(0, exports.getSelectedText)();
// 检测暗模式 -- 使用以下代码检查用户的设备是否处于暗模式。
const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
exports.isDarkMode = isDarkMode;
// 生成uuid -- 通过 blob 地址生成
const uuid = () => {
    return URL.createObjectURL(new Blob(['']))
        .split('/')
        .pop();
};
exports.uuid = uuid;
