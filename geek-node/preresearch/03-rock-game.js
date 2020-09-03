/**
 * 石头剪刀布游戏 1.0
 * 
 * 游戏方式：node 03-rock-game [石头(0)|剪刀(1)|布(2)]
 */
// 1. 从 process.argv 读取用户输入
const playerInput = process.argv[process.argv.length - 1]

// 判断用户输入
let player = -1
if (playerInput === '石头') {
  player = 0
} else if (playerInput === '剪刀') {
  player = 1
} else if (playerInput === '布') {
  player = 2
}

if (player === -1) {
  console.log('输入错误，请输入：石头|剪刀|布。')
  return
}

// 2. 电脑随机出拳
const computer = Math.floor(Math.random() * 3)
console.log(`电脑出拳 ${computer} [石头(0)|剪刀(1)|布(2)]`)

// 3. 判断胜负
if (player === computer) {
  console.log('平局')
} else if (
  (computer === 0 && player === 1) ||
  (computer === 1 && player === 2) ||
  (computer === 2 && player === 0)) {

  console.log('你输了')
} else {
  console.log('你赢了')
}
