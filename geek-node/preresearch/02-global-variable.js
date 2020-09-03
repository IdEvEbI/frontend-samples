/*
 * 1. Node.js 不支持的全局变量
 *
 * 执行会提示 `ReferenceError: window is not defined` 错误。
 */
// console.log(window)
// console.log(document)

// 浏览器渲染的下一帧
// console.log(requestAnimationFrame)
// 作为 setImmediate() 参数传入的任何函数都会在事件循环的下一个迭代中执行
console.log(setImmediate)

/**
 * 2. Node.js 和 Chrome 共有的全局变量（部分）
 */
console.log(Date)
console.log(Math)
console.log(setTimeout)
console.log(setInterval)

/** 
 * 3. Node.js 特有的环境变量
 */
// 当前运行程序的文件名
console.log(__filename)
// 当前运行程序所在的位置
console.log(__dirname)

// 进程对象，记录运行程序的进程信息
// cpuUsage: CPU 占用率
// memoryUsage: 内存占用率
// env: 当前运行环境变量
// argv: 用户执行 js 程序时，在命令行输入的命令及参数，在开发命令行工具时会使用到
console.log(process)
