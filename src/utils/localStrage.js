export function get(key) {
    let str = localStorage.getItem(key); //获取指定key本地存储的值 // 获取指定key 本地存储数据的值。
    if (!str) {
        return
    }
    let reg = /[\{\[]/g
    if (str.match(reg).length !== 0) {
        // match(reg) 功能:返回字符串匹配正则表达式reg的子串内容。
        // 该功能返回的是一个长的像数组的对象(只匹配第一个子串)或数组(全局匹配)。
        return JSON.parse(str)
    }
    return str
}
export function set(key, value) {
    return localStorage.setItem(key, value)
}
export function remove(key) {
    localStorage.removeItem(key)
}
export function clear() {
    localStorage.clear()
}