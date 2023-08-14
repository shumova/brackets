module.exports = function check(str, bracketsConfig) {
  const stack = [];

  Array.from(str).map(
    (symbol) => 
      bracketsConfig.map((sequence) => {
        if (sequence.includes(symbol)) {
          sequence[0] === symbol && sequence[0] !== sequence[1] ||
          stack[stack.length - 1] !== sequence[0] ?
          stack.push(symbol) :
          stack.pop()
        }
      }
    )
  )

  return stack.length ? false : true
}
