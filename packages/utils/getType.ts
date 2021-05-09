const getType = function (value:any) {
  if (Object) {
    const tagStr = Object.prototype.toString.call(value)
    return tagStr.substring(8, tagStr.length - 1)
  }
  return value
}
export default getType
