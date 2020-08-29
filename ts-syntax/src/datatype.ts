/**
 * 数据类型示例
 */
// 1. 基本类型
let flag: boolean = true
let num: number = 123
let str: string = 'abc'

// 提示：不同类型的变量之间不允许相互赋值
// s = n

// 2. 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]

// 提示：使用**联合类型**可以让一个数组保存多种数据类型
let arr3: (number | string)[] = [1, 2, 3, 'hello']
let arr4: Array<number | string> = [3, 2, 1, 'world']
console.log(arr3)
console.log(arr4)

// 3. 元组
// 提示：元组是一种特殊的数组，限定了数组数据的类型、个数及顺序
let t: [string, number, number] = ['张三', 18, 1.7]
console.log(t)

// 元组的越界 - 知道即可 / 开发中不建议
console.log('--- 元组越界访问示例  ---')
// 3.1 使用 push 方法向元组添加元素
t.push('hello world')
console.log(t)

// 3.2 越界访问
// 1> 通过循环可以访问超出定义的元素
for (let i = 0; i < t.length; i++) {
  console.log(`${t[i]} --- ${i}`)
}

// 2> 通过索引值访问超出定义的元素会报错
// console.log(t[3])

// 4. 函数
const add = (x: number, y: number) => x + y

// 定义
let compute: (x: number, y: number) => number
// 赋值
compute = (x, y) => x + y

// 5. 对象
let obj: { x: number; y: number } = { x: 1, y: 2 }
obj.x = 99

// 6. symbol
const s1: symbol = Symbol()
const s2 = Symbol()
console.log(`s1 === s2? ${s1 === s2}`)

// 7. 特殊数据类型
// 7.1 undefined 和 null
// 1> 一旦声明为 undefined 或 null，就不能被赋值为其他类型
let un: undefined = undefined
let nu: null = null

// 2> undefined 或 null 默认是其他所有类型的子类，可以给任何类型的变量赋值
// 提示：需要设置 tsconfig.json 的 "strictNullChecks": false
// num = undefined

// 3> 提示：对于允许为 `undefined` | `null` 的变量定义为**联合类型**
let n: number | undefined | null = 1
n = undefined
n = null
console.log(n)

// 7.2 void
// 在 js 中 void 是一个操作符，可以让任何表达式返回 undefined，例如 `void 0`。
// 提示：在 js 中 undefined 不是一个保留字，我们可以自定义一个 undefined 变量去覆盖全局的 undefined。
// 在 ts 中 void 表示没有任何返回值的类型，如下所示：
let sayHello: () => void = () => {}

// 7.3 any
// 在 ts 中，如果不指定一个变量的类型，那默认就是 any 类型，可以任意的赋值，如下所示：
let x

x = 1
x = 'abc'
x = () => {
  console.log('hello')
}
x()

// 提示：如果不是特殊情况，不建议使用 any 类型，因为如果所有变量类型都是 any，就没有必要使用 ts 了。

// 7.4 never
// 在 ts 中，never 类型表示函数永远不会被执行完成的类型，如下所示：
let e: () => never = () => {
  throw new Error('error')
}

let endless: () => never = () => {
  while (true) {}
}
