// 检查日期是否有效 -- 使用以下代码段检查给定日期是否有效。 YYYY-MM-DD
export const isDateValid = (s: string): boolean => {
  var reg =
    /^\d{4}-(?:0\d|1[0-2])-(?:[0-2]\d|3[01])( (?:[01]\d|2[0-3])\:[0-5]\d\:[0-5]\d)?$/
  var str = s
  if (str == '') return true
  if (reg.test(str)) {
    return true
  }
  return false
}
// 查找一年中的哪一天 -- 查找给定日期的哪一天。
export const dayOfYear = (date: Date): number => {
  const r = new Date(date.getFullYear(), 0, 0)
  return Math.floor((date.valueOf() - Number(r)) / 1000 / 60 / 60 / 24)
}
// 求两天之间的天数 -- 查找 2 天之间的天数
export const dayDif = (date1: Date, date2: Date): number => {
  return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
}

// 日期记录时间 -- 小时:分钟:秒
export const timeFromDate = (date: Date): string => date.toTimeString().slice(0, 8)
