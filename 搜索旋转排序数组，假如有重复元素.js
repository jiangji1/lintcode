// 搜索旋转排序数组，假如有重复元素
let A = [9,9,9,9,9,9,5,6,7,8,9]
, target = 8
const search = function (A, target) {
  if (!A.length) {
    return false
  }
  let res = -1, a = 0
  function f1 (l, r) {
    if (r - l < 2) {
      if (A[l] === A[r]) {
        a = l
        return
      } else if (A[l] < A[r]) {
        a = l
        return
      } else {
        a = r
        return
      }
    }
    let m = ~~((l + r) / 2)
    if (A[l] < A[m]) {
      f1(m, r)
    } else if (A[l] > A[m]) {
      f1(l, m)
    } else {
      let m2 = m
      ++l
      while (l !== m2) {
        if (A[l] > A[m2]) {
          f1(l, m2)
          return
        } else if (A[l] < A[m2]) {
          a = l
          return
        }
        ++l
      }
      ++m2
      while (m2 !== r) {
        if (A[m2] > A[r]) {
          f1(m2, r)
          return
        } else if (A[m2] < A[r]) {
          a = m2
          return
        }
        ++m2
      }
    }
  }
  f1(0, A.length - 1)
  console.log(a)
  function f2 (l, r) {
    if (r - l < 2) {
      if (A[l] === target) {
        res = l
        return
      }
      if (A[r] === target) {
        res = r
        return
      }
      return
    }
    let m = ~~((l + r) / 2)
    if (A[m] === target) {
      res = m
      return
    } else if (A[m] > target) {
      f2(l, m - 1)
    } else {
      f2(m, r)
    }
  }
  if (A[0] > target) {
    f2(a, A.length - 1)
  } else if (A[0] === target) {
    return true
  } else {
    if (a === 0) {
      f2(0, A.length - 1)
    } else {
      f2(0, a - 1)
    }
  }
  return res !== -1
}
console.log(search(A, target))