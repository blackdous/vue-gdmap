
import getType from './getType'
import { Coordinate, Pixel, Size } from './type'

/**
 * 通过AMap.LngLat 生成 转换为 AMap可用的经纬度
 */
export const toLngLat = (coordinate: Coordinate):any => {
  if (!coordinate || ('distance' in coordinate)) {
    return coordinate
  }

  let lng = 0
  let lat = 0
  const coordinateTypeStr:string = getType(coordinate)

  switch(coordinateTypeStr) {
    case 'Array':
      lng = coordinate[0]
      lat = coordinate[1]
      break
    case 'Object':
      if (Object.keys(coordinate).includes['lng'] && Object.keys(coordinate).includes['lat']) {
        lng = coordinate.lng
        lat = coordinate.lat
      } else if (Object.keys(coordinate).includes['longitude'] && Object.keys(coordinate).includes['latitude']) {
        lng = coordinate.longitude
        lat = coordinate.latitude
      }
      break
  }
  return new window.AMap.LngLat(lng, lat)
}

export const LngLatTo = (lnglat: any) => {
  if (!lnglat || !('distance' in lnglat)) {
    return lnglat
  }
  if (Array.isArray(lnglat)) return lnglat.slice()
  return [lnglat.getLng(), lnglat.getLat()]
}

/**
 * 设置offset
 */
export const toPixel = (offset:Pixel) => {
  if (!offset || ('getX' in offset)) {
    return offset
  }

  let x = 0
  let y = 0

  const pixelTypeStr:string = getType(offset)

  switch(pixelTypeStr) {
    case 'Array':
      x = offset[0]
      y = offset[1]
      break
    case 'Object':
      x = offset.x
      y = offset.y
      break
  }
  return new window.AMap.Pixel(x, y)
}


/**
 * 通过AMap.size生成大小
 */
export const toSize = (size:Size) => {
  if (!size || ('getWidth' in size)) {
    return size
  }
  return new window.AMap.Size(size.width, size.height)
}

export const toBounds = (coordinates: any[]) => {
  if (!coordinates) {
    return coordinates
  }
  coordinates.forEach((coordinate: Coordinate) => {
    if (!('distance' in coordinate)) {
      // eslint-disable-next-line no-param-reassign
      coordinate = toLngLat(coordinate)
    }
  })
  return new window.AMap.Bounds(coordinates[0], coordinates[1])
}


export const mapTools = {
  position: toLngLat,
  LngLat: toLngLat,
  offset: toPixel,
  bounds: toBounds,
  Bounds: toBounds,
  Pixel: toPixel,
  Size: toSize,
}
