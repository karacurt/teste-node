let count = 0

module.exports = function requestsCount(req, res, next) {
  count += 1
  console.log(`requests count: ${count}`)
  next()
}
