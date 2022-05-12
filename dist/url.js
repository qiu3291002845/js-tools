"use strict";
// 地址栏参数格式化
const queryString = (str) => {
    if (str) {
        const query = {};
        str.split('&').forEach(item => {
            const key = item.split('=')[0];
            const value = item.split('=')[1];
            query[key] = value;
        });
        return query;
    }
    else {
        return Error('The parameter of querystring is undefined');
    }
};
// 从 URL 获取查询参数 -- 从 URL 轻松检索查询参数
const getParameters = (URL) => {
    URL = JSON.parse('{"' +
        decodeURI(URL.split('?')[1])
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
        '"}');
    return JSON.stringify(URL);
};
