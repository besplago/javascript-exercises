const fibonacci = function (n) {
  if (n < 0) {
    return 'OOPS'
  }

  const fib = [0, 1]
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib[n]
}

// Do not edit below this line
module.exports = fibonacci
