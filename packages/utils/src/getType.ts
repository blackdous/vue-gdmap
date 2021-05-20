const getType = function (value:any) {
  if (Object) {
    const tagStr = Object.prototype.toString.call(value)
    return tagStr.substring(8).slice(0,-1)
  }
  return value
}
export default getType
