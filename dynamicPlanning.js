// ------------------------------------------
// 走楼梯
// const map = {}
// function f(n) {
//   if (n < 1) return 0
//   if (n === 1) return 1
//   if (n === 2) return 2
//   if (map[n]) {
//     return map[n]
//   } else {
//     const res = f(n - 1) + f(n - 2)
//     map[n] = res
//     return res
//   }
// }

// function f (n) {
//   if (n < 1) return 0
//   if (n < 3) return n
//   let a = 1
//   , b = 2
//   for (let i = 3; i < n; i++) {
//     [a, b] = [b, a + b]
//   }
//   return a + b
// }

// console.time()
// console.log(f(49))
// console.timeEnd()
// ------------------------------------------

// 挖矿
// 400/5 500/5 200/3 300/4 350/3
var N = [400, 500, 200, 300, 350]
, W = [5, 5, 3, 4, 3]

function f (n, w, g, p) {
  var preRes = []
  , res = []
  , allData = []
  // 填充第一行 1个金矿，n个工人
  for (let i = 0; i < n; i++) {
    if (i + 1 < p[0]) {
      preRes[i] = 0
    } else {
      preRes[i] = g[0]
    }
  }
  // console.log(preRes)
  for (let i = 1; i < w; i++) { // 金矿数
    for (let i2 = 0; i2 < n; i2++) { // 用工数
      if (i2 + 1 < p[i]) {
        res[i2] = preRes[i2]
      } else {
        let old = preRes[i2]
        let new1 = preRes[i2 - p[i]]
        let a = !!new1? new1 + g[i]: 0 + g[i]
        res[i2] = Math.max(old, a)
      }
    }
    allData[i] = [...res]
    preRes = [...res]
  }
  return allData[w - 1][n - 1]
}
console.log(f(10, 5, N, W))
