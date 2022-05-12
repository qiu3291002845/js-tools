// 大写字符串 -- 将字符串转化为大小字母
const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)
